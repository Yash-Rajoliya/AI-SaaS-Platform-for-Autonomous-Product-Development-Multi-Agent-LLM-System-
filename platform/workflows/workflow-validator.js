export class WorkflowValidator {
  validate(workflow) {
    const errors = [];

    if (!workflow?.id) errors.push("Workflow id is required");
    if (!workflow?.name) errors.push("Workflow name is required");

    if (!Array.isArray(workflow?.steps)) {
      errors.push("Workflow steps must be an array");
    }

    workflow.steps?.forEach((step, index) => {
      if (!step.id) {
        errors.push(`Step ${index} missing id`);
      }

      if (!step.type) {
        errors.push(`Step ${index} missing type`);
      }
    });

    return {
      valid: errors.length === 0,
      errors,
    };
  }
}