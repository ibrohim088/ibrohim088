import express from "express";
import downloadCV  from '../controllers/cvController.js'

const router = express.Router()

router.get('/', downloadCV)

export default router