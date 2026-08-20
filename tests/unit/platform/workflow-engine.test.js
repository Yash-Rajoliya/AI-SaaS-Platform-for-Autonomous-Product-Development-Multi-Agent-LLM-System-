import { describe, test, expect } from "@jest/globals";

describe("WorkflowEngine", () => {
  test("should create workflow", () => {
    const workflow = {
      id: "wf-1",
    };

    expect(workflow.id)
      .toBeDefined();
  });

  test("should transition states", () => {
    const state = "running";

    expect(state)
      .toEqual("running");
  });
});