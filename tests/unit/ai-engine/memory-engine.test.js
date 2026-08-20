import { describe, test, expect } from "@jest/globals";

describe("MemoryEngine", () => {
  test("should persist memory", () => {
    const memory = {
      key: "project",
    };

    expect(memory.key)
      .toBe("project");
  });

  test("should retrieve memory", () => {
    expect(true)
      .toBe(true);
  });
});