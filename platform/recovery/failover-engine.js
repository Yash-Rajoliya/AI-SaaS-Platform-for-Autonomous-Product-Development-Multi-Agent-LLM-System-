export class FailoverEngine {
  promote(replica) {
    return {
      promoted: replica.id,
      timestamp: new Date().toISOString(),
    };
  }
}