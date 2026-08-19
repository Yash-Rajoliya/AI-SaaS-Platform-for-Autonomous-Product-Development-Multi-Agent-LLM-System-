export class RuntimeMonitor {
  collect(runtime) {
    return {
      runtimeId: runtime.id,
      cpuUsage: runtime.cpuUsage || 0,
      memoryUsage: runtime.memoryUsage || 0,
      timestamp: new Date().toISOString(),
    };
  }

  summarize(metrics) {
    return {
      count: metrics.length,
      averageCpu:
        metrics.reduce((s, m) => s + m.cpuUsage, 0) /
        (metrics.length || 1),
      averageMemory:
        metrics.reduce((s, m) => s + m.memoryUsage, 0) /
        (metrics.length || 1),
    };
  }
}