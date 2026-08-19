import { ClusterFederation } from "./cluster-federation.js";
import { FederatedRouting } from "./federated-routing.js";
import { WorkloadDistributor } from "./workload-distributor.js";

export class FederationEngine {
  constructor() {
    this.federation = new ClusterFederation();
    this.routing = new FederatedRouting();
    this.distributor = new WorkloadDistributor();
  }

  async distribute(workload) {
    const target = this.routing.selectCluster(workload);

    return this.distributor.assign(workload, target);
  }

  getStatus() {
    return this.federation.status();
  }
}