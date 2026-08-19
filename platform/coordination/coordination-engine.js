import { ConsensusEngine } from "./consensus-engine.js";
import { LeaderElection } from "./leader-election.js";

export class CoordinationEngine {
  constructor() {
    this.consensus = new ConsensusEngine();
    this.leaderElection = new LeaderElection();
  }

  async coordinate(cluster) {
    const leader = this.leaderElection.elect(cluster.nodes);

    return {
      leader,
      consensus: this.consensus.evaluate(cluster),
      timestamp: new Date().toISOString(),
    };
  }
}