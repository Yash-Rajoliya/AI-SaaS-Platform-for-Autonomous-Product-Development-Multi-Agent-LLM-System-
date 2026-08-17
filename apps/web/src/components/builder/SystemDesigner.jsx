import React from "react";
import {
  Panel,
  PanelGroup,
  PanelResizeHandle
} from "react-resizable-panels";

import ArchitectureCanvas from "./ArchitectureCanvas";
import AIChatPanel from "./AIChatPanel";

export default function SystemDesigner({
  nodes,
  edges
}) {
  return (
    <PanelGroup
      direction="horizontal"
    >
      <Panel defaultSize={70}>
        <ArchitectureCanvas
          nodes={nodes}
          edges={edges}
        />
      </Panel>

      <PanelResizeHandle />

      <Panel defaultSize={30}>
        <AIChatPanel />
      </Panel>
    </PanelGroup>
  );
}