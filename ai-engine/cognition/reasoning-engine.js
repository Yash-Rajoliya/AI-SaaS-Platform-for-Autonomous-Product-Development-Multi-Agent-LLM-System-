import { TreeOfThought } from "../reasoning/tree-of-thought.js";
import { GraphReasoning } from "../reasoning/graph-reasoning.js";

export class ReasoningEngine {
  constructor() {
    this.treeOfThought = new TreeOfThought();
    this.graphReasoning = new GraphReasoning();
  }

  async reason({ input, context }) {
    const [thoughts, graph] = await Promise.all([
      this.treeOfThought.execute(input),
      this.graphReasoning.analyze(context),
    ]);

    return {
      thoughts,
      graph,
      confidence: 0.91,
    };
  }
}