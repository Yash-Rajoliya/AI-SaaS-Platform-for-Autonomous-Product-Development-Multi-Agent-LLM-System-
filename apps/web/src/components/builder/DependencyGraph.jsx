import React from "react";
import ReactFlow from "reactflow";

export default function DependencyGraph({
  graph
}) {
  return (
    <ReactFlow
      nodes={graph.nodes}
      edges={graph.edges}
      fitView
    />
  );
}