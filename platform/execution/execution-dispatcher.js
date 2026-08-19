import { DistributedExecutor } from "./distributed-executor.js";

export class ExecutionDispatcher {
  constructor() {
    this.executor = new DistributedExecutor();
  }

  async dispatch(plan) {
    const results = [];

    for (const step of plan.steps) {
      const result = await this.executor.execute(step);

      results.push(result);
    }

    return results;
  }
}