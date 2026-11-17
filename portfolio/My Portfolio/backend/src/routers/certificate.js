import express from 'express'
import { getCertificates, addCertificate, deleteCertificate } from '../controllers/certificateController.js'
import { uploadCertificate } from '../middleware/upload.js'

const router = express.Router()

router.get('/', getCertificates)
router.post('/', uploadCertificate, addCertificate)
router.delete('/:id', deleteCertificate)

export default router