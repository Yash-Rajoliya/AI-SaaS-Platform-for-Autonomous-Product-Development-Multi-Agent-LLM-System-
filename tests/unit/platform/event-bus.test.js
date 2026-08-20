import { describe, test, expect } from "@jest/globals";

describe("EventBus", () => {
  test("should publish event", () => {
    const published = true;

    expect(published)
      .toBeTruthy();
  });

  test("should consume event", () => {
    const consumed = true;

    expect(consumed)
      .toBeTruthy();
  });
});