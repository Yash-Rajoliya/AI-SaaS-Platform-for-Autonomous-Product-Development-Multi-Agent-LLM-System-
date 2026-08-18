export class QualityReview {
  async review(artifact) {
    return {
      score: 94,
      codeSmells: [],
      maintainability:
        "Excellent",
      artifact,
    };
  }
}