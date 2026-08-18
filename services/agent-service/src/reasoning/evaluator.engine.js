export class EvaluatorEngine {
  async evaluate(candidate) {
    const dimensions = {
      feasibility:
        this.scoreFeasibility(candidate),
      scalability:
        this.scoreScalability(candidate),
      maintainability:
        this.scoreMaintainability(candidate),
      security:
        this.scoreSecurity(candidate)
    };

    const overall =
      Object.values(dimensions).reduce(
        (sum, value) => sum + value,
        0
      ) / Object.keys(dimensions).length;

    return {
      dimensions,
      overallScore:
        Number(overall.toFixed(2)),
      decision:
        overall >= 0.75
          ? "APPROVED"
          : "REVIEW_REQUIRED",
      evaluatedAt:
        new Date().toISOString()
    };
  }

  scoreFeasibility(candidate) {
    return candidate?.complexity === "HIGH"
      ? 0.7
      : 0.9;
  }

  scoreScalability(candidate) {
    return candidate?.architecture ===
      "microservices"
      ? 0.95
      : 0.75;
  }

  scoreMaintainability(candidate) {
    return candidate?.tests
      ? 0.95
      : 0.7;
  }

  scoreSecurity(candidate) {
    return candidate?.security
      ? 0.95
      : 0.7;
  }
}