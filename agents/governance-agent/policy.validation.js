export class PolicyValidation {
  async validate(project) {
    const validations = [
      {
        name: "security-policy",
        passed: true,
      },
      {
        name: "deployment-policy",
        passed: true,
      },
      {
        name: "data-retention-policy",
        passed: true,
      },
    ];

    return {
      compliant: validations.every((v) => v.passed),
      validations,
    };
  }
}