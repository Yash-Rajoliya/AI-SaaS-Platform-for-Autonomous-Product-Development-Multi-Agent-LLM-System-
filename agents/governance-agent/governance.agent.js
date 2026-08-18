import { AuditAnalysis } from "./audit.analysis.js";
import { PolicyValidation } from "./policy.validation.js";
import { ComplianceReporting } from "./compliance.reporting.js";

export class GovernanceAgent {
  constructor({
    auditAnalysis = new AuditAnalysis(),
    policyValidation = new PolicyValidation(),
    complianceReporting = new ComplianceReporting(),
    logger,
  } = {}) {
    this.auditAnalysis = auditAnalysis;
    this.policyValidation = policyValidation;
    this.complianceReporting = complianceReporting;
    this.logger = logger;
  }

  async evaluate(project) {
    const audit = await this.auditAnalysis.run(project);
    const policies = await this.policyValidation.validate(project);

    const report = await this.complianceReporting.generate({
      project,
      audit,
      policies,
    });

    this.logger?.info("Governance evaluation completed", {
      projectId: project.id,
    });

    return report;
  }
}