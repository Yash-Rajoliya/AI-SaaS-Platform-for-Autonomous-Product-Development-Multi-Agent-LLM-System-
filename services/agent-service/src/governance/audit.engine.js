export class AuditEngine {
  constructor() {
    this.records = [];
  }

  async record(entry = {}) {
    const auditRecord = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      ...entry,
    };

    this.records.push(auditRecord);

    return auditRecord;
  }

  getHistory(limit = 100) {
    return this.records.slice(-limit);
  }
}