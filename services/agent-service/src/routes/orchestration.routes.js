import { Router } from "express";
import { OrchestrationController } from "../controllers/orchestration.controller.js";

const router = Router();

router.post("/workflows", OrchestrationController.startWorkflow);

router.get(
  "/workflows/:id",
  OrchestrationController.workflowStatus
);

export default router;