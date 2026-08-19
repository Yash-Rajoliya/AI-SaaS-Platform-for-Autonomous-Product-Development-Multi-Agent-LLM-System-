import { ExecutionPlanner } from "./execution-planner.js";
import { RecoveryEngine } from "./recovery-engine.js";

export class OrchestrationRuntime {
  constructor({
    planner = new ExecutionPlanner(),
    recovery = new RecoveryEngine(),
    logger,
  } = {}) {
    this.planner = planner;
    this.recovery = recovery;
    this.logger = logger;
  }

  async execute(workflow) {
    try {
      const plan = await this.planner.plan(workflow);

      return {
        workflowId: workflow.workflowId,
        status: "COMPLETED",
        plan,
      };
    } catch (error) {
      return this.recovery.recover(workflow, error);
    }
  }
}