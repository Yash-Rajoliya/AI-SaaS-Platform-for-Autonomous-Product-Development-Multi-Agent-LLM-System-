export class WorkflowThroughput {
  calculate(totalExecutions, seconds) {
    return {
      executions: totalExecutions,
      duration: seconds,
      throughput:
        totalExecutions / seconds,
    };
  }
}