export class OrchestratorFailureExperiment {
  async crashLeader() {
    return {
      orchestratorStopped: true,
      leaderElectionStarted: true,
    };
  }
}