export class LoadGenerator {
  generateProfile({
    users = 100,
    duration = "5m",
  } = {}) {
    return {
      virtualUsers: users,
      duration,
      rampUp: "30s",
      thresholds: {
        p95Latency: "500ms",
        errorRate: "<1%",
      },
    };
  }

  estimateInfrastructure(profile) {
    return {
      cpu:
        Math.ceil(
          profile.virtualUsers / 100,
        ) + " cores",
      memory:
        Math.ceil(
          profile.virtualUsers / 50,
        ) + " GB",
    };
  }
}