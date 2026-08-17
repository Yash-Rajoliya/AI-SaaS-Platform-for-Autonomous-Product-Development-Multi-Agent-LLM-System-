import React, { memo, useCallback } from "react";
import Editor from "@monaco-editor/react";

function CodeEditor({
  language = "javascript",
  value,
  onChange,
  readOnly = false
}) {
  const handleMount = useCallback((editor, monaco) => {
    editor.updateOptions({
      minimap: { enabled: true },
      fontSize: 14,
      automaticLayout: true,
      scrollBeyondLastLine: false
    });
  }, []);

  return (
    <Editor
      height="100%"
      language={language}
      value={value}
      onChange={onChange}
      onMount={handleMount}
      options={{ readOnly }}
      theme="vs-dark"
    />
  );
}

export default memo(CodeEditor);