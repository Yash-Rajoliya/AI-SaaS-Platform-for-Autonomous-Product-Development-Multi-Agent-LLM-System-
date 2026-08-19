export class QuorumManager {
  hasQuorum(totalNodes, availableNodes) {
    return availableNodes > totalNodes / 2;
  }
}