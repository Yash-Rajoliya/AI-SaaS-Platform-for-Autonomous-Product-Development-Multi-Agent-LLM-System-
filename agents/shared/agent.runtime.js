export class AgentRuntime {
  constructor({
    registry,
    logger,
  }) {
    this.registry = registry;
    this.logger = logger;
  }

  async execute(agentName, payload) {
    const agent = this.registry.get(agentName);

    if (!agent) {
      throw new Error(`Agent not found: ${agentName}`);
    }

    this.logger?.info("Executing agent", {
      agent: agentName,
    });

    return agent.execute(payload);
  }
}