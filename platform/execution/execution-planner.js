export class ExecutionPlanner {
  async createPlan(workflow) {
    const steps = (workflow.tasks || []).map((task, index) => ({
      id: `${workflow.id}-step-${index + 1}`,
      taskId: task.id,
      order: index + 1,
      status: "planned",
    }));

    return {
      workflowId: workflow.id,
      totalSteps: steps.length,
      steps,
      generatedAt: new Date().toISOString(),
    };
  }
}