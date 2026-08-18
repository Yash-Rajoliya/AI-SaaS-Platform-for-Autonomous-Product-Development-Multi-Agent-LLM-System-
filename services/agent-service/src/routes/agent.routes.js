import { Router } from "express";
import { AgentController } from "../controllers/agent.controller.js";

const router = Router();

router.get("/", AgentController.listAgents);

router.get("/:id", AgentController.getAgent);

router.post("/execute", AgentController.execute);

export default router;