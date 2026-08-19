import { WorkflowValidator }
from "./workflow-validator.js";

import { WorkflowRunner }
from "./workflow-runner.js";

import { WorkflowStateMachine,
         WorkflowStates }
from "./workflow-state-machine.js";

export class WorkflowEngine {
  constructor() {
    this.validator =
      new WorkflowValidator();

    this.runner =
      new WorkflowRunner();
  }

  async execute(workflow) {
    const validation =
      this.validator.validate(workflow);

    if (!validation.valid) {
      throw new Error(
        validation.errors.join(", ")
      );
    }

    workflow.state =
      WorkflowStateMachine.transition(
        WorkflowStates.CREATED,
        WorkflowStates.VALIDATED
      );

    workflow.state =
      WorkflowStateMachine.transition(
        workflow.state,
        WorkflowStates.SCHEDULED
      );

    workflow.state =
      WorkflowStateMachine.transition(
        workflow.state,
        WorkflowStates.RUNNING
      );

    try {
      const result =
        await this.runner.run(workflow);

      workflow.state =
        WorkflowStateMachine.transition(
          workflow.state,
          WorkflowStates.COMPLETED
        );

      return result;
    } catch (error) {
      workflow.state =
        WorkflowStates.FAILED;

      throw error;
    }
  }
}