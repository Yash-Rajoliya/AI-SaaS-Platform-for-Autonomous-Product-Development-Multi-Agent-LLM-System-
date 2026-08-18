import { AgentService } from "../services/agent.service.js";

const service = new AgentService();

export class AgentController {
  static async listAgents(req, res, next) {
    try {
      const agents = await service.getAgents();

      res.json({
        success: true,
        data: agents
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAgent(req, res, next) {
    try {
      const agent = await service.getAgent(req.params.id);

      res.json({
        success: true,
        data: agent
      });
    } catch (error) {
      next(error);
    }
  }

  static async execute(req, res, next) {
    try {
      const result = await service.executeTask(req.body);

      res.json({
        success: true,
        data: result
      });
    } catch (error) {
      next(error);
    }
  }
}