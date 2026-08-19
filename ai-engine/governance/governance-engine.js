export class GovernanceEngine {
  constructor(policyEngine, auditEngine) {
    this.policyEngine = policyEngine;
    this.auditEngine = auditEngine;
  }

  async validate(operation) {
    const policy =
      await this.policyEngine.validate(operation);

    await this.auditEngine.record({
      operation,
      allowed: policy.allowed,
    });

    return policy;
  }
}