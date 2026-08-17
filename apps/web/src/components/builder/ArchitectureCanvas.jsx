import React from "react";
import ReactFlow, {
  Background,
  Controls
} from "reactflow";

import "reactflow/dist/style.css";

export default function ArchitectureCanvas({
  nodes,
  edges
}) {
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      fitView
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
}