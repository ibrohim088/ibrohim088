import { Contact } from '../config/db.js'
import transporter from '../config/nodemailer.js'
import config from '../shared/config.js'

const sendContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body

    await Contact.create({
      name,
      email,
      phone: phone || null,
      subject: subject || null,
      message
    })

    await transporter.sendMail({
      from: config.EMAIL_PATH_FROM,
      to: config.EMAIL_PATH_TO,
      replyTo: email,
      subject: `${subject}`,
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; background: #ffffff; border: 1px solid #e8ecf0; border-radius: 10px; overflow: hidden;">
       
        <!-- Header -->
        <div style="background: #1a3a5c; padding: 24px 30px;">
          <p style="margin: 0; font-size: 13px; color: #a8c8e8; letter-spacing: 1px; text-transform: uppercase;">Portfolio · ibrohim.uz</p>
          <h2 style="margin: 6px 0 0; font-size: 20px; color: #ffffff; font-weight: 600;">Yangi xabar keldi</h2>
        </div>

        <!-- Fields -->
        <div style="padding: 24px 30px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; width: 110px; font-size: 12px; color: #9aa5b4; text-transform: uppercase; letter-spacing: 0.5px;">Ismi</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #1a2b3c; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 12px; color: #9aa5b4; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #2d6a9f;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 12px; color: #9aa5b4; text-transform: uppercase; letter-spacing: 0.5px;">Telefon</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #1a2b3c; font-weight: 600;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-size: 12px; color: #9aa5b4; text-transform: uppercase; letter-spacing: 0.5px;">Mavzu</td>
              <td style="padding: 10px 0; font-size: 14px; color: #1a2b3c; font-weight: 600;">${subject}</td>
            </tr>
          </table>

          <!-- Message -->
          <div style="margin-top: 20px; background: #f8fafc; border-left: 3px solid #1a3a5c; padding: 14px 16px; border-radius: 0 6px 6px 0;">
            <p style="margin: 0 0 6px; font-size: 12px; color: #9aa5b4; text-transform: uppercase; letter-spacing: 0.5px;">Xabar</p>
            <p style="margin: 0; font-size: 14px; color: #1a2b3c; line-height: 1.6;">${message}</p>
          </div>
        </div>

        <!-- Footer -->
        <div style="padding: 16px 30px; background: #f8fafc; border-top: 1px solid #e8ecf0;">
          <p style="margin: 0; font-size: 12px; color: #b0b8c4;">© 2025 Ibrohim.uz · Toshkent, O'zbekiston</p>
        </div>
      </div>
    `})

    res.status(200).json({ success: true, msg: 'Message sent' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

const getContact = async (req, res) => {
  try {
    const contacts = await Contact.findAll({ order: [['date', 'DESC']] })
    res.json(contacts)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

const delContact = async (req, res) => {
  try {
    await Contact.destroy({ where: { id: req.params.id } })
    res.status(200).json({ msg: 'Successfully deleted' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

export { sendContact, getContact, delContact }
