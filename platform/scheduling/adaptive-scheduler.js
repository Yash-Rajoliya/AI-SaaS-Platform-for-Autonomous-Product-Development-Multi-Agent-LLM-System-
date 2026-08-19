export class AdaptiveScheduler {
  optimize(metrics) {
    if (metrics.cpu > 80) {
      return {
        recommendation: "throttle-low-priority-jobs",
      };
    }

    return {
      recommendation: "normal-operation",
    };
  }
}