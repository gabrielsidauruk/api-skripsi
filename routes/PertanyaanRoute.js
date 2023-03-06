import express from "express";
import { getPertanyaan } from "../controllers/PertanyaanController.js";

const router = express.Router();

router.get('/pertanyaan', getPertanyaan)

export default router;