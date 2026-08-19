export class AuditEngine {
  constructor() {
    this.logs = [];
  }

  async record(event) {
    this.logs.push({
      ...event,
      timestamp: new Date().toISOString(),
    });
  }

  async recent(limit = 100) {
    return this.logs.slice(-limit);
  }
}