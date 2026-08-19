export class ClusterManager {
  constructor() {
    this.clusters = new Map();
  }

  register(cluster) {
    this.clusters.set(cluster.id, cluster);
  }

  get(clusterId) {
    return this.clusters.get(clusterId);
  }
}