import { workflowObserver }
from "./workflow-observer.js";

export class WorkflowRunner {
  async run(workflow) {
    const startedAt = Date.now();

    for (const step of workflow.steps) {
      workflowObserver.emitExecutionEvent({
        workflowId: workflow.id,
        step: step.id,
        status: "started",
      });

      await step.execute();

      workflowObserver.emitExecutionEvent({
        workflowId: workflow.id,
        step: step.id,
        status: "completed",
      });
    }

    return {
      workflowId: workflow.id,
      durationMs:
        Date.now() - startedAt,
    };
  }

  async resume(workflow, checkpoint) {
    const remainingSteps =
      workflow.steps.slice(
        checkpoint.stepIndex
      );

    for (const step of remainingSteps) {
      await step.execute();
    }

    return true;
  }
}