import React, { memo } from "react";

function MetricCard({
  title,
  value,
  status
}) {
  return (
    <div className="rounded-lg border p-4">
      <div className="text-sm text-slate-500">
        {title}
      </div>

      <div className="mt-2 text-2xl font-bold">
        {value}
      </div>

      <div
        className={`mt-2 text-sm ${
          status === "healthy"
            ? "text-green-600"
            : "text-red-600"
        }`}
      >
        {status}
      </div>
    </div>
  );
}

function ClusterHealth({ metrics }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <MetricCard
        title="Nodes"
        value={metrics.nodes}
        status={metrics.nodeStatus}
      />

      <MetricCard
        title="Pods"
        value={metrics.pods}
        status={metrics.podStatus}
      />

      <MetricCard
        title="CPU"
        value={`${metrics.cpu}%`}
        status={metrics.cpuStatus}
      />

      <MetricCard
        title="Memory"
        value={`${metrics.memory}%`}
        status={metrics.memoryStatus}
      />
    </div>
  );
}

export default memo(ClusterHealth);