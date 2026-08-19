export class RuntimeHealth {
  check(runtime) {
    const healthy =
      runtime.status === "running" &&
      runtime.lastHeartbeat !== undefined;

    return {
      runtimeId: runtime.id,
      healthy,
      checkedAt: new Date().toISOString(),
    };
  }

  aggregate(runtimes) {
    const healthy = runtimes.filter(
      (r) => this.check(r).healthy
    ).length;

    return {
      total: runtimes.length,
      healthy,
      unhealthy: runtimes.length - healthy,
    };
  }
}