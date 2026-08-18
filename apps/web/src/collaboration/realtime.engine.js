export class RealtimeEngine {
  constructor() {
    this.socket = null;
    this.listeners = new Set();
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
    this.reconnectTimer = null;
  }

  connect(url) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) return;

    this.url = url;
    this.socket = new WebSocket(url);

    this.socket.onopen = () => {
      this.reconnectAttempts = 0;
    };

    this.socket.onmessage = (event) => {
      try {
        const payload = JSON.parse(event.data);
        this.listeners.forEach((listener) => {
          listener(payload);
        });
      } catch (err) {
        console.warn("RealtimeEngine: Received non-JSON frame", event.data);
      }
    };

    this.socket.onclose = (event) => {
      if (!event.wasClean) {
        this.attemptReconnect();
      }
    };

    this.socket.onerror = (err) => {
      console.error("RealtimeEngine connection error:", err);
    };
  }

  attemptReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      const delay = Math.min(1000 * Math.pow(2, this.reconnectAttempts), 10000);
      
      this.reconnectTimer = setTimeout(() => {
        if (this.url) this.connect(this.url);
      }, delay);
    }
  }

  disconnect() {
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer);
    if (this.socket) {
      this.socket.onclose = null;
      this.socket.close();
      this.socket = null;
    }
    this.listeners.clear();
  }

  publish(event) {
    if (
      this.socket &&
      this.socket.readyState === WebSocket.OPEN
    ) {
      this.socket.send(JSON.stringify(event));
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);

    return () => {
      this.listeners.delete(listener);
    };
  }
}

export const realtimeEngine = new RealtimeEngine();