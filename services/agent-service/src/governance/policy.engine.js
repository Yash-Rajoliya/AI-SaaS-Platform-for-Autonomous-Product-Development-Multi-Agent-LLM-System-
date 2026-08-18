export class PolicyEngine {
  constructor() {
    this.policies = [];
  }

  register(policy) {
    this.policies.push(policy);
  }

  async evaluate(context = {}) {
    const violations = [];

    for (const policy of this.policies) {
      const passed = await policy.validate(
        context,
      );

      if (!passed) {
        violations.push({
          policy: policy.name,
          severity:
            policy.severity || "medium",
        });
      }
    }

    return {
      allowed: violations.length === 0,
      violations,
    };
  }
}