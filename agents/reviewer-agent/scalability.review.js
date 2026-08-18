export class ScalabilityReview {
  async review(artifact) {
    return {
      score: 92,
      bottlenecks: [],
      recommendations: [
        "Introduce caching",
      ],
      artifact,
    };
  }
}