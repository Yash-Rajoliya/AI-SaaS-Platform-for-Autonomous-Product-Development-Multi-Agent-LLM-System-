import { StateReplication } from "./state-replication.js";
import { ConsistencyEngine } from "./consistency-engine.js";

export class DistributedStateManager {
  constructor() {
    this.replication = new StateReplication();
    this.consistency = new ConsistencyEngine();
  }

  async update(key, value) {
    await this.replication.replicate(key, value);

    return {
      key,
      consistent: true,
    };
  }
}