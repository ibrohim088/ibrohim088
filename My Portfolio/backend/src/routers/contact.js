import express from "express";
import { sendContact, getContact, delContact } from '../controllers/contactController.js'
import contactLimit from '../middleware/rateLimiter.js'
import validate from '../middleware/validate.js'

const router = express.Router()

router.get('/', getContact)
router.post('/', contactLimit, validate, sendContact)
router.delete('/:id', delContact)

export default router