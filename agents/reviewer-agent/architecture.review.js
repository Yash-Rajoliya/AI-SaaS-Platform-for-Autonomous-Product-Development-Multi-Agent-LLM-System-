export class ArchitectureReview {
  async review(artifact) {
    return {
      score: 96,
      designViolations: [],
      recommendations: [],
      approved: true,
      artifact,
    };
  }
}