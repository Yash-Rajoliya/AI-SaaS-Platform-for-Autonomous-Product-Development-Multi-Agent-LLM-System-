export class ExecutionService {
  async execute(workflow) {
    const startedAt = Date.now();

    const stages = [
      {
        name: "planning",
        status: "completed"
      },
      {
        name: "architecture",
        status: "completed"
      },
      {
        name: "implementation",
        status: "completed"
      },
      {
        name: "review",
        status: workflow.review.approved
          ? "completed"
          : "failed"
      }
    ];

    return {
      workflowId: workflow.workflowId,
      success: workflow.review.approved,
      stages,
      durationMs: Date.now() - startedAt,
      completedAt: new Date().toISOString()
    };
  }
}