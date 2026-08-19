import { ContainerRuntime } from "./container-runtime.js";
import { RuntimeAllocator } from "./runtime-allocator.js";
import { RuntimeHealth } from "./runtime-health.js";
import { RuntimeMonitor } from "./runtime-monitor.js";

export class RuntimeManager {
  constructor() {
    this.runtimes = new Map();

    this.containerRuntime = new ContainerRuntime();
    this.allocator = new RuntimeAllocator();
    this.health = new RuntimeHealth();
    this.monitor = new RuntimeMonitor();
  }

  async createRuntime(workload) {
    const resources = await this.allocator.allocate(workload);

    const runtime = await this.containerRuntime.start({
      workload,
      resources,
    });

    this.runtimes.set(runtime.id, runtime);

    return runtime;
  }

  async terminateRuntime(runtimeId) {
    const runtime = this.runtimes.get(runtimeId);

    if (!runtime) return false;

    await this.containerRuntime.stop(runtimeId);

    this.runtimes.delete(runtimeId);

    return true;
  }

  getRuntime(runtimeId) {
    return this.runtimes.get(runtimeId);
  }

  listRuntimes() {
    return [...this.runtimes.values()];
  }
}