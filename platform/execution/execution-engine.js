import { ExecutionPlanner } from "./execution-planner.js";
import { ExecutionDispatcher } from "./execution-dispatcher.js";
import { ExecutionMetrics } from "./execution-metrics.js";

export class ExecutionEngine {
  constructor({
    planner = new ExecutionPlanner(),
    dispatcher = new ExecutionDispatcher(),
    metrics = new ExecutionMetrics(),
  } = {}) {
    this.planner = planner;
    this.dispatcher = dispatcher;
    this.metrics = metrics;
  }

  async execute(workflow) {
    const plan = await this.planner.createPlan(workflow);

    const startedAt = Date.now();

    const results = await this.dispatcher.dispatch(plan);

    this.metrics.recordExecution({
      workflowId: workflow.id,
      durationMs: Date.now() - startedAt,
      steps: plan.steps.length,
    });

    return {
      workflowId: workflow.id,
      plan,
      results,
      completedAt: new Date().toISOString(),
    };
  }
}