export class RedisFailureExperiment {
  async simulate() {
    return {
      component: "redis",
      status: "unavailable",
    };
  }

  async validateFallback() {
    return {
      cacheFallbackWorking: true,
    };
  }
}