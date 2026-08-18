export class ComplianceReporting {
  async generate({ project, audit, policies }) {
    return {
      projectId: project.id,
      generatedAt: new Date().toISOString(),
      auditScore: audit.auditScore,
      compliant: policies.compliant,
      findings: audit.findings,
      recommendations: [],
    };
  }
}