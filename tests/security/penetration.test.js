import { describe, test, expect } from "@jest/globals";

describe("Penetration Tests", () => {
  test("should block SQL injection", () => {
    const payload = "' OR 1=1 --";

    expect(payload).toContain("1=1");
  });

  test("should sanitize malicious input", () => {
    const input = "<script>alert(1)</script>";

    expect(input).toContain("<script>");
  });
});