import React, {
  useState,
  useEffect
} from "react";

import CodeEditor from "../builder/CodeEditor";

export default function RealtimeEditor({
  document,
  socket
}) {
  const [content, setContent] =
    useState(document);

  useEffect(() => {
    if (!socket) return;

    socket.on(
      "document:update",
      setContent
    );

    return () => {
      socket.off(
        "document:update",
        setContent
      );
    };
  }, [socket]);

  const handleChange = (value) => {
    setContent(value);

    socket?.emit(
      "document:update",
      value
    );
  };

  return (
    <CodeEditor
      language="markdown"
      value={content}
      onChange={handleChange}
    />
  );
}