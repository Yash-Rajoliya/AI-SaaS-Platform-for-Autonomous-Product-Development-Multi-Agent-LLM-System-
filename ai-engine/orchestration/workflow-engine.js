export class WorkflowEngine {
  async createWorkflow(tasks = []) {
    return {
      workflowId: crypto.randomUUID(),
      status: "CREATED",
      tasks,
      createdAt: new Date().toISOString(),
    };
  }
}