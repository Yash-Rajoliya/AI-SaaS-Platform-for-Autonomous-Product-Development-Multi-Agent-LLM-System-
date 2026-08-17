import React, {
  memo
} from "react";

import Card from "@/components/common/Card";

function AgentTimeline({
  events = []
}) {
  return (
    <Card>
      <h3 className="mb-4 font-semibold">
        Agent Timeline
      </h3>

      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="relative pl-6"
          >
            <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-indigo-600" />

            <div className="font-medium">
              {event.title}
            </div>

            <div className="text-sm text-slate-500">
              {event.description}
            </div>

            <div className="text-xs text-slate-400">
              {event.timestamp}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default memo(
  AgentTimeline
);