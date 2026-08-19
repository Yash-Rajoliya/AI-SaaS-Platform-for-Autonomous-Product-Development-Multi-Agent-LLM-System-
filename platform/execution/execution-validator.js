export class ExecutionValidator {
  validatePlan(plan) {
    const errors = [];

    if (!plan.workflowId) {
      errors.push("Workflow ID is required");
    }

    if (!Array.isArray(plan.steps)) {
      errors.push("Execution steps missing");
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }

  validateExecution(execution) {
    return {
      valid:
        execution &&
        execution.status !== "failed",
      checkedAt: new Date().toISOString(),
    };
  }
}