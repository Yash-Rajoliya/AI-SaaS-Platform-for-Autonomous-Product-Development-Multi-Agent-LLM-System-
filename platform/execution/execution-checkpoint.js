export class ExecutionCheckpoint {
  constructor() {
    this.checkpoints = new Map();
  }

  save(executionId, state) {
    this.checkpoints.set(executionId, {
      state,
      timestamp: Date.now(),
    });

    return true;
  }

  load(executionId) {
    return this.checkpoints.get(executionId);
  }

  delete(executionId) {
    return this.checkpoints.delete(executionId);
  }
}