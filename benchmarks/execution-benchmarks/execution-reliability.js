export class ExecutionReliabilityBenchmark {
  evaluate(executions) {
    const successful =
      executions.filter(
        e => e.status === "completed",
      );

    return {
      totalExecutions:
        executions.length,
      successful:
        successful.length,
      reliability:
        successful.length /
        executions.length,
    };
  }
}