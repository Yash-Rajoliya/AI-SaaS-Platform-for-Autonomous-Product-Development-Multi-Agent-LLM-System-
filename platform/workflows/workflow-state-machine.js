export const WorkflowStates = Object.freeze({
  CREATED: "CREATED",
  VALIDATED: "VALIDATED",
  SCHEDULED: "SCHEDULED",
  RUNNING: "RUNNING",
  PAUSED: "PAUSED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  RECOVERING: "RECOVERING",
  CANCELLED: "CANCELLED",
});

const transitions = {
  CREATED: ["VALIDATED", "FAILED"],
  VALIDATED: ["SCHEDULED", "FAILED"],
  SCHEDULED: ["RUNNING", "CANCELLED"],
  RUNNING: ["PAUSED", "COMPLETED", "FAILED"],
  PAUSED: ["RUNNING", "CANCELLED"],
  FAILED: ["RECOVERING"],
  RECOVERING: ["RUNNING", "FAILED"],
};

export class WorkflowStateMachine {
  static canTransition(from, to) {
    return transitions[from]?.includes(to) ?? false;
  }

  static transition(currentState, nextState) {
    if (!this.canTransition(currentState, nextState)) {
      throw new Error(
        `Invalid workflow transition: ${currentState} -> ${nextState}`
      );
    }

    return nextState;
  }
}