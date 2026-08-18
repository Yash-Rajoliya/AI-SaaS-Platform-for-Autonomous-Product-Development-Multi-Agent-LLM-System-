export const AgentType = Object.freeze({
  PLANNER: "planner",
  ARCHITECT: "architect",
  DEVELOPER: "developer",
  REVIEWER: "reviewer",
  DEVOPS: "devops",
  QA: "qa",
  DEBUGGING: "debugging",
  SECURITY: "security",
  GOVERNANCE: "governance",
  OPTIMIZATION: "optimization",
});

export const AgentStatus = Object.freeze({
  IDLE: "idle",
  RUNNING: "running",
  COMPLETED: "completed",
  FAILED: "failed",
});