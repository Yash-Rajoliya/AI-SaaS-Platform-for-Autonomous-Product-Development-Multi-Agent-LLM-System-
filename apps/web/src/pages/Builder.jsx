import {
  PanelGroup,
  Panel,
  PanelResizeHandle
} from "react-resizable-panels";

import FileTree from "../components/builder/FileTree";
import CodeEditor from "../components/builder/CodeEditor";
import Terminal from "../components/builder/Terminal";
import AIChatPanel from "../components/builder/AIChatPanel";

import { useState } from "react";

export default function Builder() {
  const [file, setFile] =
    useState("README.md");

  const [content, setContent] =
    useState("# Project");

  return (
    <div className="h-screen">
      <PanelGroup direction="horizontal">
        <Panel defaultSize={20}>
          <FileTree
            files={[]}
            onSelect={(selected) =>
              setFile(selected.name)
            }
          />
        </Panel>

        <PanelResizeHandle />

        <Panel defaultSize={55}>
          <CodeEditor
            language="markdown"
            value={content}
            onChange={setContent}
          />
        </Panel>

        <PanelResizeHandle />

        <Panel defaultSize={25}>
          <AIChatPanel />
        </Panel>
      </PanelGroup>

      <div className="h-64 border-t">
        <Terminal />
      </div>
    </div>
  );
}