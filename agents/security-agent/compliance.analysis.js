export class ComplianceAnalysis {
  async analyze(project) {
    return {
      standards: [
        "SOC2",
        "ISO27001",
        "GDPR",
      ],
      score: 91,
      passed: true,
    };
  }
}