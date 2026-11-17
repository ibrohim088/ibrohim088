import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const downloadResume = (req, res) => {
  const { lang = 'uz' } = req.query
  const allowed = ['uz', 'ru', 'en']

  if (!allowed.includes(lang)) {
    return res.status(400).json({ msg: 'Invalid language' })
  }

  const filePath = path.join(__dirname, `../uploads/resume/resume_${lang}.pdf`)

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ msg: 'Resume not found' })
  }

  res.download(filePath)
}

export default downloadResume 
