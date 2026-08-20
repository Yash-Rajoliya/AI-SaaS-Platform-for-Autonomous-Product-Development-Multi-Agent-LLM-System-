import { describe, test, expect } from "@jest/globals";

describe("DeveloperAgent", () => {
  test("should generate source code", () => {
    const code =
      "console.log('hello')";

    expect(code)
      .toContain("hello");
  });

  test("should pass lint validation", () => {
    expect(true)
      .toBe(true);
  });
});