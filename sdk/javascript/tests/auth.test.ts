import { describe, it, expect, beforeEach, vi } from "vitest";
import { PlatformClient } from "../src/client";
import { AuthAPI } from "../src/auth";

describe("AuthAPI", () => {
  let fetchMock: ReturnType<typeof vi.fn>;
  let auth: AuthAPI;

  beforeEach(() => {
    fetchMock = vi.fn();
    global.fetch = fetchMock as any;

    const client = new PlatformClient({
      apiKey: "test-key",
      baseUrl: "https://api.example.com"
    });

    auth = new AuthAPI(client);
  });

  it("logs in successfully", async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({
        success: true,
        data: {
          accessToken: "jwt-token",
          refreshToken: "refresh-token"
        }
      })
    });

    const result = await auth.login({
      email: "john@example.com",
      password: "password123"
    });

    expect(
      result.accessToken
    ).toBe("jwt-token");
  });

  it("registers successfully", async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({
        success: true,
        data: {
          id: "user-1",
          email: "new@example.com"
        }
      })
    });

    const result =
      await auth.register({
        email: "new@example.com",
        password: "password123",
        name: "John Doe"
      });

    expect(result.id).toBe(
      "user-1"
    );
  });

  it("refreshes token", async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({
        success: true,
        data: {
          accessToken:
            "new-access-token"
        }
      })
    });

    const token =
      await auth.refreshToken(
        "refresh-token"
      );

    expect(
      token.accessToken
    ).toBe(
      "new-access-token"
    );
  });

  it("logs out successfully", async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({
        success: true
      })
    });

    await expect(
      auth.logout()
    ).resolves.not.toThrow();
  });

  it("handles invalid credentials", async () => {
    fetchMock.mockResolvedValue({
      ok: false,
      status: 401,
      json: async () => ({
        message:
          "Invalid credentials"
      })
    });

    await expect(
      auth.login({
        email: "bad@example.com",
        password: "wrong"
      })
    ).rejects.toThrow();
  });
});