import { useEffect, useRef } from "react";
import websocketService from "../services/websocket.service";

export function useRealtime(url, onMessage) {
  const callbackRef = useRef(onMessage);

  useEffect(() => {
    callbackRef.current = onMessage;
  }, [onMessage]);

  useEffect(() => {
    websocketService.connect(url);

    websocketService.subscribe((payload) => {
      callbackRef.current?.(payload);
    });

    return () => {
      websocketService.disconnect();
    };
  }, [url]);
}