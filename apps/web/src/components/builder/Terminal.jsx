import React, {
  useEffect,
  useRef
} from "react";

import { Terminal as XTerm } from "@xterm/xterm";
import "@xterm/xterm/css/xterm.css";

export default function Terminal({
  onCommand
}) {
  const terminalRef = useRef(null);

  useEffect(() => {
    const term = new XTerm();

    term.open(terminalRef.current);

    term.write(
      "AI Platform Terminal\r\n$ "
    );

    term.onData(data => {
      onCommand?.(data);
    });

    return () => term.dispose();
  }, [onCommand]);

  return (
    <div
      ref={terminalRef}
      className="h-full w-full"
    />
  );
}