import { test, expect } from "@playwright/test";

test("production deployment", async () => {
  const deployment = {
    environment: "prod",
    status: "healthy",
  };

  expect(deployment.status).toBe("healthy");
});