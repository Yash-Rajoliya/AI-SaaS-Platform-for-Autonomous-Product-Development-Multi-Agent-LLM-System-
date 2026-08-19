export class EventConsumer {
  async consume(message, handler) {
    return handler(message);
  }
}