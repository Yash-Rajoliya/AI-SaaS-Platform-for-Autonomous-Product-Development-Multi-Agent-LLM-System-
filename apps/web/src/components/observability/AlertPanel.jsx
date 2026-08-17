import React, { memo } from "react";

const severityClasses = {
  critical: "bg-red-100 text-red-700",
  warning: "bg-yellow-100 text-yellow-700",
  info: "bg-blue-100 text-blue-700"
};

function AlertPanel({ alerts = [] }) {
  return (
    <div className="space-y-3">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className="rounded-lg border p-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">
              {alert.title}
            </h3>

            <span
              className={`px-2 py-1 rounded text-xs ${
                severityClasses[alert.severity]
              }`}
            >
              {alert.severity}
            </span>
          </div>

          <p className="mt-2 text-sm">
            {alert.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default memo(AlertPanel);