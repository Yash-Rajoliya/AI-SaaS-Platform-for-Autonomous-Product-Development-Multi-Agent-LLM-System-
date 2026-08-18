export class AgentTelemetry {
  constructor(logger) {
    this.logger = logger;
  }

  record(event, metadata = {}) {
    this.logger?.info("agent.telemetry", {
      event,
      ...metadata,
      timestamp: Date.now(),
    });
  }

  error(error, metadata = {}) {
    this.logger?.error("agent.error", {
      error: error.message,
      stack: error.stack,
      ...metadata,
    });
  }
}