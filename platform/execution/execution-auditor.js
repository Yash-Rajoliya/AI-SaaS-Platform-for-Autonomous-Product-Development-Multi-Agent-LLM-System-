export class ExecutionAuditor {
  constructor() {
    this.events = [];
  }

  record(event) {
    this.events.push({
      ...event,
      timestamp: new Date().toISOString(),
    });
  }

  getAuditTrail(executionId) {
    return this.events.filter(
      (event) => event.executionId === executionId
    );
  }
}