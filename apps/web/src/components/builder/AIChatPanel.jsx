import React, {
  useState
} from "react";

export default function AIChatPanel({
  onSend
}) {
  const [message, setMessage] =
    useState("");

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-auto">
        Chat Messages
      </div>

      <div className="flex gap-2 border-t p-3">
        <input
          className="flex-1 border p-2"
          value={message}
          onChange={(e) =>
            setMessage(
              e.target.value
            )
          }
        />

        <button
          onClick={() => {
            onSend(message);
            setMessage("");
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}