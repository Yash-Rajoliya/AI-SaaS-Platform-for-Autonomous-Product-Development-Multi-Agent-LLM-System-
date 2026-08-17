import React, { memo } from "react";

function IncidentTimeline({ events = [] }) {
  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div
          key={event.id}
          className="flex gap-4"
        >
          <div className="w-32 text-sm text-slate-500">
            {event.timestamp}
          </div>

          <div className="flex-1 rounded border p-3">
            <h4 className="font-medium">
              {event.title}
            </h4>

            <p className="text-sm text-slate-600">
              {event.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default memo(IncidentTimeline);