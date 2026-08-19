export class ClusterFederation {
  constructor() {
    this.clusters = new Map();
  }

  register(cluster) {
    this.clusters.set(cluster.id, cluster);
  }

  unregister(clusterId) {
    return this.clusters.delete(clusterId);
  }

  status() {
    return {
      clusters: this.clusters.size,
      timestamp: new Date().toISOString(),
    };
  }
}