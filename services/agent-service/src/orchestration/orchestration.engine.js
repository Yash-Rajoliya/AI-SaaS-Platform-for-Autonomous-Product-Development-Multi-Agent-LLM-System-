import { FederatedRuntime } from "./federated.runtime.js";
import { NegotiationEngine } from "./negotiation.engine.js";
import { WorkflowEngine } from "./workflow.engine.js";

export class OrchestrationEngine {
  constructor({
    runtime = new FederatedRuntime(),
    negotiation = new NegotiationEngine(),
    workflow = new WorkflowEngine(),
  } = {}) {
    this.runtime = runtime;
    this.negotiation = negotiation;
    this.workflow = workflow;
  }

  async orchestrate(context = {}) {
    const participants = await this.runtime.discoverAgents();

    const consensus = await this.negotiation.reachConsensus(
      participants,
      context,
    );

    const workflow = await this.workflow.buildWorkflow({
      context,
      consensus,
    });

    return {
      workflowId: workflow.id,
      participants,
      consensus,
      workflow,
      status: "orchestrated",
      timestamp: new Date().toISOString(),
    };
  }

  async execute(context = {}) {
    const orchestration = await this.orchestrate(context);

    const execution = await this.workflow.execute(
      orchestration.workflow,
    );

    return {
      ...orchestration,
      execution,
    };
  }
}