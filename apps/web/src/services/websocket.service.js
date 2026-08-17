class WebSocketService {
  socket = null;

  connect(url) {
    this.socket = new WebSocket(url);

    return this.socket;
  }

  disconnect() {
    this.socket?.close();
  }

  send(event) {
    this.socket?.send(
      JSON.stringify(event)
    );
  }

  subscribe(callback) {
    this.socket?.addEventListener(
      "message",
      (event) => {
        callback(
          JSON.parse(event.data)
        );
      }
    );
  }
}

export default new WebSocketService();