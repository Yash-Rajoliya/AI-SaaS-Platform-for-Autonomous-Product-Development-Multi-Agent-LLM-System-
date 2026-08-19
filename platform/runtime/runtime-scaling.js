export class RuntimeScaling {
  calculate(metrics) {
    const recommendations = [];

    if (metrics.cpuUsage > 80) {
      recommendations.push("scale-up");
    }

    if (metrics.cpuUsage < 20) {
      recommendations.push("scale-down");
    }

    return {
      recommendations,
      timestamp: new Date().toISOString(),
    };
  }
}