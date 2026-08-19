import EventEmitter from "events";

export class CommunicationBus extends EventEmitter {
  constructor(options = {}) {
    super();
    // Prevent MaxListenersExceededWarning when multiple agents subscribe
    this.setMaxListeners(options.maxListeners || 100);
  }

  publish(topic, payload) {
    this.emit(topic, payload);
  }

  subscribe(topic, handler) {
    this.on(topic, handler);

    return () => this.removeListener(topic, handler);
  }

  request(topic, payload, timeoutMs = 5000) {
    return new Promise((resolve, reject) => {
      let timer = null;

      const responseHandler = (response) => {
        if (timer) clearTimeout(timer);
        resolve(response);
      };

      if (timeoutMs > 0) {
        timer = setTimeout(() => {
          reject(
            new Error(
              `CommunicationBus: Request timed out on topic "${topic}" after ${timeoutMs}ms`
            )
          );
        }, timeoutMs);
      }

      // Emit request with single-use resolve callback wrapper
      this.emit(topic, payload, responseHandler);
    });
  }
}