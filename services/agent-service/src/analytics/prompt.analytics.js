export class PromptAnalytics {
  analyze(executions = []) {
    const total = executions.length;

    const successful =
      executions.filter(
        (item) => item.success,
      ).length;

    return {
      totalExecutions: total,
      successRate:
        total === 0
          ? 0
          : Number(
              (
                (successful / total) *
                100
              ).toFixed(2),
            ),
      generatedAt:
        new Date().toISOString(),
    };
  }

  averageLatency(executions = []) {
    if (!executions.length) {
      return 0;
    }

    return (
      executions.reduce(
        (sum, item) =>
          sum + (item.latency || 0),
        0,
      ) / executions.length
    );
  }
}