export class DatabaseFailureExperiment {
  async simulatePrimaryFailure() {
    return {
      primaryDown: true,
      failoverTriggered: true,
    };
  }
}