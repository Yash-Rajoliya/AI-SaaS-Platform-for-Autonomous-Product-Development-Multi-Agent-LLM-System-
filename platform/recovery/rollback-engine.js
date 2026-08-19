export class RollbackEngine {
  rollback(version) {
    return {
      rolledBack: true,
      version,
      timestamp: new Date().toISOString(),
    };
  }
}