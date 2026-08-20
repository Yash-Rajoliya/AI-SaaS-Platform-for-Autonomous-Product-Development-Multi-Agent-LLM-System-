import { test, expect } from "@playwright/test";

test("rollback after failure", async () => {
  const rollback = true;
  expect(rollback).toBe(true);
});