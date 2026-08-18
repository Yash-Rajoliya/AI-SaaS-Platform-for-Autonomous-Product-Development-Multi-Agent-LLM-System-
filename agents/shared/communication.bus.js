import EventEmitter from "events";

export class CommunicationBus extends EventEmitter {
  publish(topic, payload) {
    this.emit(topic, payload);
  }

  subscribe(topic, handler) {
    this.on(topic, handler);

    return () => this.removeListener(topic, handler);
  }

  request(topic, payload) {
    return new Promise((resolve) => {
      this.emit(topic, payload, resolve);
    });
  }
}