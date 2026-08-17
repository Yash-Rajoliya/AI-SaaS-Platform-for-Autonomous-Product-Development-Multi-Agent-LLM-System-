import React, {
  useState
} from "react";

export default function WorkspaceChat({
  messages = [],
  onSend
}) {
  const [message, setMessage] =
    useState("");

  const submit = () => {
    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-auto p-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="mb-3"
          >
            <div className="font-medium">
              {msg.author}
            </div>

            <div>{msg.content}</div>
          </div>
        ))}
      </div>

      <div className="border-t p-3 flex gap-2">
        <input
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          className="flex-1 border rounded p-2"
          placeholder="Message workspace..."
        />

        <button
          onClick={submit}
          className="px-4 py-2 rounded bg-slate-900 text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}