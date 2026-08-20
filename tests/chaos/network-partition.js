export class NetworkPartitionExperiment {
  async injectPartition() {
    return {
      injected: true,
      partitionType: "service-isolation",
      timestamp: Date.now(),
    };
  }

  async restore() {
    return {
      restored: true,
    };
  }
}