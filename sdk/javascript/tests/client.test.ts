import { describe, it, expect, beforeEach, vi } from "vitest";
import { PlatformClient } from "../src/client";
import { PlatformError } from "../src/errors";

describe("PlatformClient", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    fetchMock = vi.fn();
    global.fetch = fetchMock as any;
  });

  it("creates a client with valid configuration", () => {
    const client = new PlatformClient({
      apiKey: "test-api-key",
      baseUrl: "https://api.example.com"
    });

    expect(client).toBeDefined();
  });

  it("performs GET request successfully", async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({
        success: true,
        data: {
          id: "proj-1",
          name: "Test Project"
        }
      })
    });

    const client = new PlatformClient({
      apiKey: "key",
      baseUrl: "https://api.example.com"
    });

    const response = await client.get("/projects/proj-1");

    expect(response.data.id).toBe("proj-1");

    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("adds authentication headers", async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({
        success: true,
        data: {}
      })
    });

    const client = new PlatformClient({
      apiKey: "secure-key",
      baseUrl: "https://api.example.com"
    });

    await client.get("/health");

    const request = fetchMock.mock.calls[0];

    expect(
      request[1].headers.Authorization
    ).toBe("Bearer secure-key");
  });

  it("throws PlatformError on failure", async () => {
    fetchMock.mockResolvedValue({
      ok: false,
      status: 500,
      json: async () => ({
        message: "Internal Server Error"
      })
    });

    const client = new PlatformClient({
      apiKey: "key",
      baseUrl: "https://api.example.com"
    });

    await expect(
      client.get("/projects")
    ).rejects.toBeInstanceOf(
      PlatformError
    );
  });

  it("handles network failures", async () => {
    fetchMock.mockRejectedValue(
      new Error("Network unavailable")
    );

    const client = new PlatformClient({
      apiKey: "key",
      baseUrl: "https://api.example.com"
    });

    await expect(
      client.get("/projects")
    ).rejects.toThrow(
      "Network unavailable"
    );
  });
});