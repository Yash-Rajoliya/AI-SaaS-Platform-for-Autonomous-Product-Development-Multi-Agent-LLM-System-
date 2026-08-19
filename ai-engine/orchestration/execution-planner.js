export class ExecutionPlanner {
  async plan(workflow) {
    return {
      workflowId: workflow.workflowId,
      executionMode: "parallel",
      stages: workflow.tasks.map((task, index) => ({
        order: index + 1,
        task,
      })),
    };
  }
}