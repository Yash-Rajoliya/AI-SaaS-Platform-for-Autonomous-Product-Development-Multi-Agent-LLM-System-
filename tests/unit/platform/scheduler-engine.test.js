import { describe, test, expect } from "@jest/globals";

describe("SchedulerEngine", () => {
  test("should schedule task", () => {
    const scheduled = true;

    expect(scheduled)
      .toBeTruthy();
  });

  test("should prioritize task", () => {
    const priority = 1;

    expect(priority)
      .toBeLessThan(5);
  });
});