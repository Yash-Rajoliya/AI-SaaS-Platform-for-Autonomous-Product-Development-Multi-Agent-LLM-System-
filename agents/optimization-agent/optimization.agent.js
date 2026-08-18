import { CostOptimizer } from "./cost.optimizer.js";
import { ScalingOptimizer } from "./scaling.optimizer.js";
import { WorkflowOptimizer } from "./workflow.optimizer.js";

export class OptimizationAgent {
  constructor({
    costOptimizer = new CostOptimizer(),
    scalingOptimizer = new ScalingOptimizer(),
    workflowOptimizer = new WorkflowOptimizer(),
    logger,
  } = {}) {
    this.costOptimizer = costOptimizer;
    this.scalingOptimizer = scalingOptimizer;
    this.workflowOptimizer = workflowOptimizer;
    this.logger = logger;
  }

  async optimize(context) {
    const [cost, scaling, workflow] = await Promise.all([
      this.costOptimizer.optimize(context),
      this.scalingOptimizer.optimize(context),
      this.workflowOptimizer.optimize(context),
    ]);

    return {
      cost,
      scaling,
      workflow,
    };
  }
}