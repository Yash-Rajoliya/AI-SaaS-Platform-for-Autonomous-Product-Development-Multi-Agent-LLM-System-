export class AgentAnalytics {
  summarize(agents = []) {
    return agents.map((agent) => ({
      id: agent.id,
      role: agent.role,
      tasksCompleted:
        agent.tasksCompleted || 0,
      successRate:
        agent.successRate || 0,
    }));
  }

  topPerformers(
    agents = [],
    limit = 5,
  ) {
    return [...agents]
      .sort(
        (a, b) =>
          (b.successRate || 0) -
          (a.successRate || 0),
      )
      .slice(0, limit);
  }
}