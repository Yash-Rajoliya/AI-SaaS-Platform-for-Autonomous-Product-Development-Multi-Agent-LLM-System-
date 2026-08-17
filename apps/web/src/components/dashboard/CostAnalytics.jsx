import React, {
  memo,
  useMemo
} from "react";

import Card from "@/components/common/Card";

function CostAnalytics({
  records = []
}) {
  const summary = useMemo(() => {
    const total =
      records.reduce(
        (acc, item) =>
          acc + item.cost,
        0
      );

    const average =
      records.length > 0
        ? total /
          records.length
        : 0;

    return {
      total,
      average
    };
  }, [records]);

  return (
    <Card>
      <h3 className="mb-4 font-semibold">
        Cost Analytics
      </h3>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <Metric
          label="Total Cost"
          value={`$${summary.total.toFixed(
            2
          )}`}
        />

        <Metric
          label="Average"
          value={`$${summary.average.toFixed(
            2
          )}`}
        />
      </div>

      <div className="space-y-2">
        {records.map((record) => (
          <div
            key={record.id}
            className="flex items-center justify-between rounded border px-3 py-2"
          >
            <span>
              {record.service}
            </span>

            <span className="font-medium">
              ${record.cost}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function Metric({
  label,
  value
}) {
  return (
    <div className="rounded-lg border p-4">
      <div className="text-sm text-slate-500">
        {label}
      </div>

      <div className="text-2xl font-bold">
        {value}
      </div>
    </div>
  );
}

export default memo(
  CostAnalytics
);