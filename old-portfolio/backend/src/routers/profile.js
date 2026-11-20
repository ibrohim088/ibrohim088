import express from "express";
import { getProfile, uploadProfile } from '../controllers/profileController.js'
import { uploadPhoto } from '../middleware/upload.js'

const router = express.Router()

router.get('/', getProfile)
router.put('/', uploadPhoto, uploadProfile)

export default router