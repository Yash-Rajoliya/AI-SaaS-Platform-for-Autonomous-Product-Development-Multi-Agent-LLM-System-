export class FederatedRouting {
  selectCluster(workload) {
    const regions = workload.regions || ["primary"];

    return {
      region: regions[0],
      strategy: "latency-aware",
    };
  }
}