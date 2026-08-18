import crypto from "crypto";

export class FederatedRuntime {
  constructor() {
    this.agents = new Map();
  }

  register(agent) {
    this.agents.set(agent.id, {
      ...agent,
      registeredAt: Date.now(),
    });
  }

  unregister(agentId) {
    this.agents.delete(agentId);
  }

  async discoverAgents() {
    return [...this.agents.values()];
  }

  async allocate(task) {
    const agents = await this.discoverAgents();

    if (!agents.length) {
      throw new Error("No available agents");
    }

    return agents.sort(
      (a, b) => (a.load || 0) - (b.load || 0),
    )[0];
  }

  createExecutionId() {
    return crypto.randomUUID();
  }
}