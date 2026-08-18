import { randomUUID } from "crypto";
import { PlannerService } from "./planner.service.js";
import { ArchitectService } from "./architect.service.js";
import { DeveloperService } from "./developer.service.js";
import { ReviewerService } from "./reviewer.service.js";
import { ExecutionService } from "./execution.service.js";

export class AgentService {
  constructor() {
    this.planner = new PlannerService();
    this.architect = new ArchitectService();
    this.developer = new DeveloperService();
    this.reviewer = new ReviewerService();
    this.execution = new ExecutionService();
  }

  async getAgents() {
    return [
      {
        id: "planner-agent",
        name: "Planner Agent",
        role: "Requirement Analysis"
      },
      {
        id: "architect-agent",
        name: "Architect Agent",
        role: "System Design"
      },
      {
        id: "developer-agent",
        name: "Developer Agent",
        role: "Implementation"
      },
      {
        id: "reviewer-agent",
        name: "Reviewer Agent",
        role: "Quality Assurance"
      }
    ];
  }

  async getAgent(id) {
    const agents = await this.getAgents();

    return (
      agents.find((agent) => agent.id === id) || {
        id,
        status: "unknown"
      }
    );
  }

  async executeTask(payload) {
    const workflowId = randomUUID();

    const plan = await this.planner.generatePlan(payload);

    const architecture =
      await this.architect.designArchitecture(plan);

    const implementation =
      await this.developer.generateImplementation(
        architecture
      );

    const review =
      await this.reviewer.reviewImplementation(
        implementation
      );

    const execution =
      await this.execution.execute({
        workflowId,
        plan,
        architecture,
        implementation,
        review
      });

    return {
      workflowId,
      status: "completed",
      result: execution
    };
  }
}