import React, {
  memo
} from "react";

import Card from "@/components/common/Card";

function ReliabilityPanel({
  uptime = 99.99,
  errorRate = 0.01,
  availability = 99.95,
  mttr = "4m"
}) {
  return (
    <Card>
      <h3 className="mb-4 font-semibold">
        Reliability Overview
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <Metric
          label="Uptime"
          value={`${uptime}%`}
        />

        <Metric
          label="Availability"
          value={`${availability}%`}
        />

        <Metric
          label="Error Rate"
          value={`${errorRate}%`}
        />

        <Metric
          label="MTTR"
          value={mttr}
        />
      </div>
    </Card>
  );
}

function Metric({
  label,
  value
}) {
  return (
    <div className="rounded-lg border p-3">
      <div className="text-xs text-slate-500">
        {label}
      </div>

      <div className="text-xl font-bold">
        {value}
      </div>
    </div>
  );
}

export default memo(
  ReliabilityPanel
);