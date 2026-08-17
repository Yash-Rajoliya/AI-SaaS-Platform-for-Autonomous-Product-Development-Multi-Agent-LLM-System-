import React, { memo } from "react";
import ReactFlow, {
  Background,
  Controls
} from "reactflow";

import "reactflow/dist/style.css";

function ServiceMap({
  services,
  dependencies
}) {
  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={services}
        edges={dependencies}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default memo(ServiceMap);