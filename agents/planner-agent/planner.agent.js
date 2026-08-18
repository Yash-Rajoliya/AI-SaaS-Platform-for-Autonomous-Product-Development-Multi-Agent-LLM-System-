import { PlannerPrompt } from "./planner.prompt.js";
import { PlannerMemory } from "./planner.memory.js";
import { PlannerEvaluator } from "./planner.evaluator.js";

export class PlannerAgent {
  constructor({
    llmProvider,
    prompt = new PlannerPrompt(),
    memory = new PlannerMemory(),
    evaluator = new PlannerEvaluator(),
  }) {
    this.llmProvider = llmProvider;
    this.prompt = prompt;
    this.memory = memory;
    this.evaluator = evaluator;
  }

  async createPlan(requirements) {
    const context =
      await this.memory.getContext();

    const prompt =
      this.prompt.buildPrompt({
        requirements,
        context,
      });

    const response =
      await this.llmProvider.generate({
        prompt,
      });

    const evaluation =
      await this.evaluator.evaluate(
        response,
      );

    await this.memory.storePlan({
      requirements,
      response,
      evaluation,
    });

    return {
      plan: response,
      evaluation,
    };
  }
}