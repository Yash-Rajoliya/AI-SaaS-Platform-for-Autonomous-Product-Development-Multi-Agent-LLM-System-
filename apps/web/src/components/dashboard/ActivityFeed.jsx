import React, {
  memo
} from "react";

import Card from "@/components/common/Card";

function ActivityFeed({
  activities = []
}) {
  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold">
          Activity Feed
        </h3>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <ActivityItem
            key={activity.id}
            activity={activity}
          />
        ))}
      </div>
    </Card>
  );
}

function ActivityItem({
  activity
}) {
  return (
    <div className="border-b pb-3">
      <div className="font-medium">
        {activity.title}
      </div>

      <div className="text-sm text-slate-500">
        {activity.description}
      </div>

      <div className="mt-1 text-xs text-slate-400">
        {activity.timestamp}
      </div>
    </div>
  );
}

export default memo(ActivityFeed);