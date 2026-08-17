import React, { memo, useMemo } from "react";

function TraceNode({ span, level = 0 }) {
  return (
    <div
      className="border-l pl-3 py-2"
      style={{ marginLeft: `${level * 16}px` }}
    >
      <div className="flex items-center justify-between">
        <span className="font-medium">{span.name}</span>
        <span className="text-xs text-slate-500">
          {span.duration} ms
        </span>
      </div>

      {span.children?.map((child) => (
        <TraceNode
          key={child.id}
          span={child}
          level={level + 1}
        />
      ))}
    </div>
  );
}

function TraceViewer({ trace }) {
  const rootSpan = useMemo(
    () => trace?.root || null,
    [trace]
  );

  if (!rootSpan) {
    return (
      <div className="p-6 text-slate-500">
        No trace selected
      </div>
    );
  }

  return (
    <div className="overflow-auto p-4">
      <TraceNode span={rootSpan} />
    </div>
  );
}

export default memo(TraceViewer);