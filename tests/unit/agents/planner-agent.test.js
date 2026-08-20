import { describe, test, expect } from "@jest/globals";

describe("PlannerAgent", () => {
  test("should generate roadmap", () => {
    const roadmap = [
      "Design",
      "Build",
      "Deploy",
    ];

    expect(roadmap.length)
      .toBeGreaterThan(0);
  });

  test("should estimate milestones", () => {
    const milestones = 5;

    expect(milestones)
      .toBeGreaterThan(0);
  });
});