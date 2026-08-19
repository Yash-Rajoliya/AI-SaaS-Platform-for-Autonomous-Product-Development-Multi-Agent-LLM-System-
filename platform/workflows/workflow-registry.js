export class WorkflowRegistry {
  constructor() {
    this.workflows = new Map();
  }

  register(workflow) {
    this.workflows.set(workflow.id, workflow);
    return workflow;
  }

  get(workflowId) {
    return this.workflows.get(workflowId);
  }

  remove(workflowId) {
    return this.workflows.delete(workflowId);
  }

  list() {
    return [...this.workflows.values()];
  }
}

export const workflowRegistry = new WorkflowRegistry();