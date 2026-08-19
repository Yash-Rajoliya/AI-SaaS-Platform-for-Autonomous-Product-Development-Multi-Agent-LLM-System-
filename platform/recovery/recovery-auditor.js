export class RecoveryAuditor {
  constructor() {
    this.events = [];
  }

  record(event) {
    this.events.push({
      ...event,
      timestamp: new Date().toISOString(),
    });
  }

  getEvents() {
    return this.events;
  }
}