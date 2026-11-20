import express from "express";
import { getEducation, addEducation, deleteEducation } from '../controllers/educationController.js'
import { uploadLogo } from '../middleware/upload.js'

const router = express.Router()

router.get('/', getEducation)
router.post('/', uploadLogo, addEducation)
router.delete('/:id', deleteEducation)

export default router