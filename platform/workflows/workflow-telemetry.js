export class WorkflowTelemetry {
  constructor(metricsClient) {
    this.metrics = metricsClient;
  }

  recordExecution(workflowId, durationMs) {
    this.metrics.histogram(
      "workflow_execution_duration_ms",
      durationMs,
      { workflowId }
    );
  }

  incrementFailures(workflowId) {
    this.metrics.increment(
      "workflow_execution_failures_total",
      { workflowId }
    );
  }

  incrementSuccess(workflowId) {
    this.metrics.increment(
      "workflow_execution_success_total",
      { workflowId }
    );
  }
}