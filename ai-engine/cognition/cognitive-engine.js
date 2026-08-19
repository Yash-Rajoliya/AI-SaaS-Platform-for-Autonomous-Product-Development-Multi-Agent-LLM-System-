import { ReasoningEngine } from "./reasoning-engine.js";
import { DecisionEngine } from "./decision-engine.js";
import { ContextEngine } from "./context-engine.js";

export class CognitiveEngine {
  constructor({
    reasoningEngine = new ReasoningEngine(),
    decisionEngine = new DecisionEngine(),
    contextEngine = new ContextEngine(),
    logger,
  } = {}) {
    this.reasoningEngine = reasoningEngine;
    this.decisionEngine = decisionEngine;
    this.contextEngine = contextEngine;
    this.logger = logger;
  }

  async process(input) {
    const context = await this.contextEngine.build(input);

    const reasoning = await this.reasoningEngine.reason({
      input,
      context,
    });

    const decision = await this.decisionEngine.decide({
      context,
      reasoning,
    });

    return {
      context,
      reasoning,
      decision,
      timestamp: new Date().toISOString(),
    };
  }
}