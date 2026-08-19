import crypto from "crypto";

export class ContainerRuntime {
  async start(config) {
    return {
      id: crypto.randomUUID(),
      status: "running",
      createdAt: new Date().toISOString(),
      config,
    };
  }

  async stop(runtimeId) {
    return {
      runtimeId,
      status: "terminated",
      terminatedAt: new Date().toISOString(),
    };
  }

  async restart(runtimeId) {
    return {
      runtimeId,
      status: "restarted",
      timestamp: new Date().toISOString(),
    };
  }
}