export class EventRouter {
  route(event) {
    return {
      routed: true,
      destination: event.topic,
      timestamp: new Date().toISOString(),
    };
  }
}