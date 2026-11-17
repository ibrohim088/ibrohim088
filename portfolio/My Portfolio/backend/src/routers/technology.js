import express from "express";
import { getTech, addTech, deleteTech } from '../controllers/techController.js'
import { uploadIcon } from '../middleware/upload.js'

const router = express.Router()

router.get('/', getTech)
router.post('/', uploadIcon, addTech)
router.delete('/:id', deleteTech)

export default router