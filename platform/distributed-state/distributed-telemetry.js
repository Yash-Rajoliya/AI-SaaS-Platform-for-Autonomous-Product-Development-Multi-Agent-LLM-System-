export class DistributedTelemetry {
  collect(stateCluster) {
    return {
      nodes: stateCluster.nodes.length,
      timestamp: new Date().toISOString(),
      status: "healthy",
    };
  }
}