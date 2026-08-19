export class RuntimeAllocator {
  async allocate(workload) {
    const cpu = Math.max(1, workload.cpu || 1);
    const memory = Math.max(512, workload.memory || 1024);

    return {
      cpu,
      memory,
      allocatedAt: new Date().toISOString(),
    };
  }

  async release(runtimeId) {
    return {
      runtimeId,
      released: true,
    };
  }
}