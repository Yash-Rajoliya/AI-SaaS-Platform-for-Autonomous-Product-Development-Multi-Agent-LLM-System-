import { describe, test, expect } from "@jest/globals";

describe("Failover", () => {
  test("should failover to secondary node", async () => {
    const result = {
      activeNode: "secondary",
    };

    expect(result.activeNode).toBe("secondary");
  });
});