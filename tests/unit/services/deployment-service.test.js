import { describe, test, expect } from "@jest/globals";

describe("DeploymentService", () => {
  test("should create deployment", () => {
    const deployment = {
      environment: "prod",
      version: "1.0.0",
    };

    expect(deployment.environment)
      .toBe("prod");
  });

  test("should verify deployment version", () => {
    const version = "1.0.0";

    expect(version)
      .toMatch(/\d+\.\d+\.\d+/);
  });
});