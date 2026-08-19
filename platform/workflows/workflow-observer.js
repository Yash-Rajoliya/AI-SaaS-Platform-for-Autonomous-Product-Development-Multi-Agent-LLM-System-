import EventEmitter from "events";

export class WorkflowObserver extends EventEmitter {
  emitStateChange(workflowId, state) {
    this.emit("workflow.state.changed", {
      workflowId,
      state,
      timestamp: Date.now(),
    });
  }

  emitExecutionEvent(event) {
    this.emit("workflow.execution", event);
  }
}

export const workflowObserver = new WorkflowObserver();