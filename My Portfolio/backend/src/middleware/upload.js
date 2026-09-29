import multer from 'multer'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const ensureDir = (folder) => {
  const dir = path.join(__dirname, `../../src/uploads/${folder}`)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  return dir
}

const storage = (folder) => multer.diskStorage({
  destination: (req, file, cb) => cb(null, ensureDir(folder)),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
})

const fileFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png|svg|webp/
  allowed.test(path.extname(file.originalname).toLowerCase())
    ? cb(null, true)
    : cb(new Error('Только изображения!'))
}

export const uploadPhoto = multer({ storage: storage('photo'), fileFilter }).single('photo')
export const uploadIcon  = multer({ storage: storage('icons'), fileFilter }).single('icon')
export const uploadLogo  = multer({ storage: storage('logos'), fileFilter }).single('logo')
export const uploadCertificate = multer({ storage: storage('certificates'), fileFilter }).single('image')