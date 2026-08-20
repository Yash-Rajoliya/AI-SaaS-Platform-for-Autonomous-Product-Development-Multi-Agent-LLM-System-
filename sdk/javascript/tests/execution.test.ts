import { describe, it, expect, beforeEach, vi } from "vitest";
import { PlatformClient } from "../src/client";
import { ExecutionAPI } from "../src/execution";

describe("ExecutionAPI", () => {
  let fetchMock: ReturnType<typeof vi.fn>;
  let execution: ExecutionAPI;

  beforeEach(() => {
    fetchMock = vi.fn();
    global.fetch = fetchMock as any;

    const client = new PlatformClient({
      apiKey: "test-key",
      baseUrl: "https://api.example.com"
    });

    execution =
      new ExecutionAPI(client);
  });

  it("creates an execution", async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({
        success: true,
        data: {
          id: "exec-123",
          status: "queued"
        }
      })
    });

    const result =
      await execution.create({
        projectId: "project-1",
        prompt:
          "Build an AI SaaS platform"
      });

    expect(result.id).toBe(
      "exec-123"
    );

    expect(result.status).toBe(
      "queued"
    );
  });

  it("gets execution status", async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({
        success: true,
        data: {
          id: "exec-123",
          status: "running"
        }
      })
    });

    const result =
      await execution.get(
        "exec-123"
      );

    expect(result.status).toBe(
      "running"
    );
  });

  it("cancels execution", async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({
        success: true,
        data: {
          cancelled: true
        }
      })
    });

    const result =
      await execution.cancel(
        "exec-123"
      );

    expect(
      result.cancelled
    ).toBe(true);
  });

  it("lists executions", async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({
        success: true,
        data: {
          items: [
            {
              id: "exec-1"
            },
            {
              id: "exec-2"
            }
          ],
          total: 2
        }
      })
    });

    const result =
      await execution.list();

    expect(result.total).toBe(2);

    expect(
      result.items.length
    ).toBe(2);
  });

  it("polls until completion", async () => {
    fetchMock
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          success: true,
          data: {
            id: "exec-1",
            status: "running"
          }
        })
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          success: true,
          data: {
            id: "exec-1",
            status: "completed"
          }
        })
      });

    const status1 =
      await execution.get(
        "exec-1"
      );

    const status2 =
      await execution.get(
        "exec-1"
      );

    expect(status1.status).toBe(
      "running"
    );

    expect(status2.status).toBe(
      "completed"
    );
  });

  it("handles execution failure", async () => {
    fetchMock.mockResolvedValue({
      ok: false,
      status: 500,
      json: async () => ({
        message:
          "Execution failed"
      })
    });

    await expect(
      execution.create({
        projectId: "project-1",
        prompt: "test"
      })
    ).rejects.toThrow();
  });
});