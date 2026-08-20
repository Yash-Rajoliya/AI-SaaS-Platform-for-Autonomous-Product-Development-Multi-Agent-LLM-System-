import WebSocket from "ws";

export interface RealtimeEvent<T = unknown> {
  type: string;
  timestamp: string;
  payload: T;
}

export interface WebSocketOptions {
  reconnect?: boolean;
  reconnectDelay?: number;
}

export class PlatformWebSocket {
  private socket?: WebSocket;
  private reconnectTimer?: NodeJS.Timeout;

  constructor(
    private readonly url: string,
    private readonly options: WebSocketOptions = {}
  ) {}

  connect(
    onMessage: (event: RealtimeEvent) => void
  ) {
    this.socket = new WebSocket(this.url);

    this.socket.on("open", () => {
      console.info(
        `[SDK] Connected to ${this.url}`
      );
    });

    this.socket.on("message", raw => {
      try {
        const event = JSON.parse(
          raw.toString()
        ) as RealtimeEvent;

        onMessage(event);
      } catch (error) {
        console.error(
          "[SDK] Invalid websocket payload",
          error
        );
      }
    });

    this.socket.on("close", () => {
      if (this.options.reconnect) {
        this.scheduleReconnect(onMessage);
      }
    });

    this.socket.on("error", error => {
      console.error(
        "[SDK] WebSocket error",
        error
      );
    });
  }

  send(data: unknown) {
    this.socket?.send(
      JSON.stringify(data)
    );
  }

  disconnect() {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
    }

    this.socket?.close();
  }

  private scheduleReconnect(
    onMessage: (
      event: RealtimeEvent
    ) => void
  ) {
    const delay =
      this.options.reconnectDelay ?? 3000;

    this.reconnectTimer = setTimeout(() => {
      this.connect(onMessage);
    }, delay);
  }
}