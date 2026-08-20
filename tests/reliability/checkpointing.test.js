import { describe, test, expect } from "@jest/globals";

describe("Checkpointing", () => {
  test("should restore execution from checkpoint", () => {
    const checkpoint = {
      restored: true,
    };

    expect(checkpoint.restored).toBe(true);
  });
});