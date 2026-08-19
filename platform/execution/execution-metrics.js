export class ExecutionMetrics {
  constructor() {
    this.executions = [];
  }

  recordExecution(metric) {
    this.executions.push(metric);
  }

  summarize() {
    const total = this.executions.length;

    const avgDuration =
      total === 0
        ? 0
        : this.executions.reduce(
            (sum, item) => sum + item.durationMs,
            0
          ) / total;

    return {
      totalExecutions: total,
      averageDurationMs: Math.round(avgDuration),
    };
  }
}