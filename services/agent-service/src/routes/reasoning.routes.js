import { Router } from "express";
import { ReasoningController } from "../controllers/reasoning.controller.js";

const router = Router();

router.post("/analyze", ReasoningController.analyze);

router.post("/evaluate", ReasoningController.evaluate);

export default router;