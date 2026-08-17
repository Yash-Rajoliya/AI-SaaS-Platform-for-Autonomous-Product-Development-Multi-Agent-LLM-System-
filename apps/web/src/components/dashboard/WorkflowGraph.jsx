import React, {
  memo
} from "react";

import Card from "@/components/common/Card";

function WorkflowGraph({
  nodes = [],
  edges = []
}) {
  return (
    <Card>
      <h3 className="mb-4 font-semibold">
        Workflow Graph
      </h3>

      <div className="rounded-lg border bg-slate-50 p-6">
        <div className="mb-4 text-sm text-slate-500">
          Nodes: {nodes.length}
        </div>

        <div className="mb-4 text-sm text-slate-500">
          Connections:{" "}
          {edges.length}
        </div>

        <div className="flex flex-wrap gap-3">
          {nodes.map((node) => (
            <div
              key={node.id}
              className="rounded-lg border bg-white px-4 py-2 shadow-sm"
            >
              {node.label}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default memo(
  WorkflowGraph
);