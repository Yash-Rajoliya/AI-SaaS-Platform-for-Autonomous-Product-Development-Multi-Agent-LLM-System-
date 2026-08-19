export class DecisionEngine {
  async decide({ context, reasoning }) {
    const score =
      (reasoning.confidence || 0.5) *
      (context.relevance || 0.5);

    return {
      selectedStrategy:
        score > 0.8 ? "AUTONOMOUS_EXECUTION" : "HUMAN_REVIEW",
      confidence: Number(score.toFixed(2)),
      rationale: "Decision derived from reasoning confidence and context quality.",
    };
  }
}