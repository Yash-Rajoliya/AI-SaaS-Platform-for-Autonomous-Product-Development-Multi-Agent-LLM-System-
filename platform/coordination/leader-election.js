export class LeaderElection {
  elect(nodes) {
    return [...nodes]
      .sort((a, b) => b.priority - a.priority)[0];
  }
}