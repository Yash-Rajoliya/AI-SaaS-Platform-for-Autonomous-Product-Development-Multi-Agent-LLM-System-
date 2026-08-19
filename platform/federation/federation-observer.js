export class FederationObserver {
  observe(event) {
    return {
      event,
      timestamp: new Date().toISOString(),
    };
  }
}