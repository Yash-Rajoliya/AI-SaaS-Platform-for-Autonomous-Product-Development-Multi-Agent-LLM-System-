export class ConsensusEngine {
  evaluate(cluster) {
    const votes = cluster.nodes.filter(
      (n) => n.vote === true
    ).length;

    return votes > cluster.nodes.length / 2;
  }
}