import { PolicyEngine } from "./policy.engine.js";
import { ComplianceEngine } from "./compliance.engine.js";
import { AuditEngine } from "./audit.engine.js";

export class GovernanceEngine {
  constructor({
    policyEngine = new PolicyEngine(),
    complianceEngine = new ComplianceEngine(),
    auditEngine = new AuditEngine(),
  } = {}) {
    this.policyEngine = policyEngine;
    this.complianceEngine = complianceEngine;
    this.auditEngine = auditEngine;
  }

  async evaluate(context = {}) {
    const policyResult =
      await this.policyEngine.evaluate(context);

    const complianceResult =
      await this.complianceEngine.assess(context);

    const auditRecord =
      await this.auditEngine.record({
        context,
        policyResult,
        complianceResult,
      });

    return {
      compliant:
        policyResult.allowed &&
        complianceResult.compliant,
      policyResult,
      complianceResult,
      auditRecord,
      evaluatedAt: new Date().toISOString(),
    };
  }

  async enforce(context = {}) {
    const result = await this.evaluate(context);

    if (!result.compliant) {
      throw new Error(
        "Governance validation failed",
      );
    }

    return result;
  }
}