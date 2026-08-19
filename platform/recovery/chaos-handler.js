export class ChaosHandler {
  inject(type) {
    return {
      experiment: type,
      executedAt: new Date().toISOString(),
    };
  }
}