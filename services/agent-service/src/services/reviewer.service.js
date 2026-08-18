export class ReviewerService {
  async reviewImplementation(implementation) {
    const findings = [];

    if (!implementation.sourceGenerated) {
      findings.push("Implementation not generated.");
    }

    return {
      approved: findings.length === 0,
      findings,
      score: findings.length === 0 ? 95 : 60,
      reviewedAt: new Date().toISOString()
    };
  }
}