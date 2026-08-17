import React, {
  memo
} from "react";

import Card from "@/components/common/Card";

function MetricsPanel({
  metrics = {}
}) {
  const cards = [
    {
      label: "Requests",
      value:
        metrics.requests || 0
    },
    {
      label: "Latency",
      value: `${
        metrics.latency || 0
      } ms`
    },
    {
      label: "Tokens",
      value:
        metrics.tokens || 0
    },
    {
      label: "Errors",
      value:
        metrics.errors || 0
    }
  ];

  return (
    <Card>
      <h3 className="mb-4 font-semibold">
        Runtime Metrics
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {cards.map((metric) => (
          <div
            key={metric.label}
            className="rounded-lg border p-4"
          >
            <div className="text-sm text-slate-500">
              {metric.label}
            </div>

            <div className="mt-1 text-2xl font-bold">
              {metric.value}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default memo(
  MetricsPanel
);