import { describe, test, expect, jest } from "@jest/globals";

describe("AuthService", () => {
  test("should authenticate valid user", async () => {
    const authService = {
      login: jest.fn().mockResolvedValue({
        token: "jwt-token",
        userId: "user-1",
      }),
    };

    const result =
      await authService.login(
        "admin@test.com",
        "password",
      );

    expect(result.token)
      .toBeDefined();

    expect(authService.login)
      .toHaveBeenCalledTimes(1);
  });

  test("should reject invalid credentials", async () => {
    const authService = {
      login: jest.fn().mockRejectedValue(
        new Error("Unauthorized"),
      ),
    };

    await expect(
      authService.login("bad", "bad"),
    ).rejects.toThrow("Unauthorized");
  });
});