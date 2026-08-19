export class EventProducer {
  async produce(topic, payload) {
    return {
      topic,
      payload,
      timestamp: new Date().toISOString(),
    };
  }
}