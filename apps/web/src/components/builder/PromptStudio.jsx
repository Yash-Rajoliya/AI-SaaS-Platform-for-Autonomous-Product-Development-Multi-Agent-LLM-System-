import React, {
  useState
} from "react";

import CodeEditor from "./CodeEditor";

export default function PromptStudio({
  value,
  onSave
}) {
  const [prompt, setPrompt] =
    useState(value);

  return (
    <div className="flex h-full flex-col">
      <div className="border-b p-3">
        <button
          onClick={() =>
            onSave(prompt)
          }
        >
          Save Prompt
        </button>
      </div>

      <div className="flex-1">
        <CodeEditor
          language="markdown"
          value={prompt}
          onChange={setPrompt}
        />
      </div>
    </div>
  );
}