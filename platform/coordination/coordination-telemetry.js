export class CoordinationTelemetry {
  collect(cluster) {
    return {
      clusterId: cluster.id,
      nodes: cluster.nodes.length,
      timestamp: new Date().toISOString(),
    };
  }
}