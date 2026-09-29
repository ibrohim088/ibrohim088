import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { getIPv4 } from './src/utilities/network.js'

import config from './src/shared/config.js'
import connectDB from './src/config/db.js'

import langMiddleware from './src/middleware/lang.js'

import technologyRouter from './src/routers/technology.js'
import educationRouter from './src/routers/education.js'
import certificate from './src/routers/certificate.js'
import profileRouter from './src/routers/profile.js'
import contactRouter from './src/routers/contact.js'
import resumeRouter from './src/routers/resume.js'
import cvRouter from './src/routers/cv.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const IP = getIPv4()
const app = express()

app.use(cors({ origin: [config.CLIENT_URL, config.CLIENT_MB_URL], credentials: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static(join(__dirname, 'src', 'uploads')))
app.use(langMiddleware)

app.use('/api/profile', profileRouter)
app.use('/api/certificate', certificate)
app.use('/api/educations', educationRouter)
app.use('/api/technologies', technologyRouter)
app.use('/api/contacts', contactRouter)
app.use('/api/resume', resumeRouter)
app.use('/api/cv', cvRouter)

app.use((req, res) => {
  res.status(404).json({ msg: 'Route not found' })
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ msg: err.message })
})

try {
  await connectDB()
  app.listen(config.PORT, config.CLIENT_HOST, () => {
    console.log(`Server running on port: ${config.PORT}`)
    console.log(`Network: http://${IP}:${config.PORT}`)
  })
} catch (err) {
  console.error('Failed to connect DB:', err)
  process.exit(1)
}
