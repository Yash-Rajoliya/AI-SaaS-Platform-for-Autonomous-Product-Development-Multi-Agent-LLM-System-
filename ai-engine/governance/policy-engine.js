export class PolicyEngine {
  constructor() {
    this.rules = [
      {
        name: "NoProductionDelete",
        validate: op =>
          !(
            op.environment === "production" &&
            op.action === "delete"
          ),
      },
    ];
  }

  async validate(operation) {
    const violations = this.rules
      .filter(rule => !rule.validate(operation))
      .map(rule => rule.name);

    return {
      allowed: violations.length === 0,
      violations,
    };
  }
}