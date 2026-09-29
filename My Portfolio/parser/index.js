const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const input = require("input");
const fs = require("fs");
const path = require("path");

const API_ID = ;
const API_HASH = "";
const PHONE = "+998";
const CHANNEL = "itjobstashkent";
const DAYS_BACK = 30;

const SESSION_FILE = "tg_session.txt";
const PDF_DIR = "resumes_pdf";

async function main() {
    const savedSession = fs.existsSync(SESSION_FILE) ?
        fs.readFileSync(SESSION_FILE, "utf-8") :
        "";
    const stringSession = new StringSession(savedSession);

    const client = new TelegramClient(stringSession, API_ID, API_HASH, {
        connectionRetries: 5,
    });

    await client.start({
        phoneNumber: async() => PHONE,
        password: async() => await input.text("2FA parol: "),
        phoneCode: async() => await input.text("Kod: "),
        onError: (err) => console.log(err),
    });

    fs.writeFileSync(SESSION_FILE, client.session.save());

    if (!fs.existsSync(PDF_DIR)) fs.mkdirSync(PDF_DIR);

    const cutoffMs = Date.now() - DAYS_BACK * 24 * 60 * 60 * 1000;
    const messagesData = [];
    let offsetId = 0;
    let pdfCount = 0;

    while (true) {
        const batch = await client.getMessages(CHANNEL, {
            limit: 100,
            offsetId: offsetId,
        });

        if (batch.length === 0) break;

        let hitCutoff = false;
        for (const msg of batch) {
            const msgTimeMs = msg.date * 1000;
            if (msgTimeMs < cutoffMs) {
                hitCutoff = true;
                break;
            }

            let pdfPath = null;

            if (msg.document) {
                const fileNameAttr = msg.document.attributes.find(
                    (a) => a.fileName
                );
                const fileName = fileNameAttr ? fileNameAttr.fileName : `${msg.id}.pdf`;
                const isPdf =
                    msg.document.mimeType === "application/pdf" ||
                    fileName.toLowerCase().endsWith(".pdf");

                if (isPdf) {
                    const safeName = `${msg.id}_${fileName}`.replace(/[\\/:*?"<>|]/g, "_");
                    pdfPath = path.join(PDF_DIR, safeName);
                    await client.downloadMedia(msg, { outputFile: pdfPath });
                    pdfCount++;
                }
            }

            if ((msg.message && msg.message.trim().length > 0) || pdfPath) {
                messagesData.push({
                    id: msg.id,
                    date: new Date(msgTimeMs).toISOString(),
                    text: msg.message || "",
                    senderId: msg.senderId ? msg.senderId.toString() : null,
                    pdfFile: pdfPath,
                });
            }
        }

        if (hitCutoff) break;
        offsetId = batch[batch.length - 1].id;
    }

    fs.writeFileSync(
        "telegram_messages.json",
        JSON.stringify(messagesData, null, 2),
        "utf-8"
    );

    const txtLines = messagesData.map(
            (m) =>
            `===== ${m.date} (id=${m.id}) =====\n${m.text}${
        m.pdfFile ? `\n[PDF: ${m.pdfFile}]` : ""
      }\n`
  );
  fs.writeFileSync("telegram_messages.txt", txtLines.join("\n"), "utf-8");

  console.log(`Done: ${messagesData.length} messages, ${pdfCount} PDFs saved to ${PDF_DIR}/`);

  await client.disconnect();
}

main().catch((err) => console.error(err));