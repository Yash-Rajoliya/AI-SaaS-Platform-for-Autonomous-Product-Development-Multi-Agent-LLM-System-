export class StateReplication {
  async replicate(key, value) {
    return {
      key,
      replicated: true,
      timestamp: new Date().toISOString(),
      value,
    };
  }
}