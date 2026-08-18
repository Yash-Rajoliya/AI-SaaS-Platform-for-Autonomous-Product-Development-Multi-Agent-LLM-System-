export class PlannerEvaluator {
  async evaluate(plan) {
    const score = 90;

    return {
      score,
      strengths: [
        "Clear roadmap",
        "Well-defined milestones",
      ],
      weaknesses: [],
      approved: score >= 80,
    };
  }
}