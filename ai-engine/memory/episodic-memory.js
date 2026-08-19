export class EpisodicMemory {
  constructor() {
    this.events = [];
  }

  add(event) {
    this.events.push({
      ...event,
      timestamp: Date.now(),
    });
  }

  latest(limit = 20) {
    return [...this.events]
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, limit);
  }

  byAgent(agentId) {
    return this.events.filter(
      event => event.agentId === agentId
    );
  }
}