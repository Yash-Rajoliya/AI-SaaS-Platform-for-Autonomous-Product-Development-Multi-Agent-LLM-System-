export class SecurityReview {
  async review(artifact) {
    return {
      score: 95,
      findings: [],
      approved: true,
      artifact,
    };
  }
}