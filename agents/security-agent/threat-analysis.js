export class ThreatAnalysis {
  async analyze(project) {
    return {
      project: project.slug,
      threats: [
        "Privilege escalation",
        "Supply chain attack",
        "Credential leakage",
      ],
      riskLevel: "medium",
    };
  }
}