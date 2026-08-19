export class FederationTelemetry {
  collect(cluster) {
    return {
      clusterId: cluster.id,
      region: cluster.region,
      timestamp: new Date().toISOString(),
    };
  }
}