import nodemailer from 'nodemailer'
import config from '../shared/config.js'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.EMAIL_PATH_FROM,
    pass: config.EMAIL_PASS,
  }
})

export default transporter
