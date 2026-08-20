export class OrchestrationLatency {
  analyze(workflows) {
    return workflows.map(w => ({
      workflowId: w.id,
      latencyMs: w.endTime - w.startTime,
    }));
  }
}