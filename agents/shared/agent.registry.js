export class AgentRegistry {
  constructor() {
    this.agents = new Map();
  }

  register(agent) {
    this.agents.set(agent.name, agent);
  }

  unregister(name) {
    this.agents.delete(name);
  }

  get(name) {
    return this.agents.get(name);
  }

  list() {
    return [...this.agents.values()];
  }
}