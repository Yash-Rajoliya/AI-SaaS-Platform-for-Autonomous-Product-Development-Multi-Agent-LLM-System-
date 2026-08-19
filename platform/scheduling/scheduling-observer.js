export class SchedulingObserver {
  observe(event) {
    return {
      event,
      timestamp: new Date().toISOString(),
    };
  }
}