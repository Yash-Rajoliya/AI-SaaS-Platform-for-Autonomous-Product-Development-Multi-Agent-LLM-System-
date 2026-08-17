import React, { memo } from "react";

function PresenceIndicator({
  users = []
}) {
  return (
    <div className="flex -space-x-2">
      {users.map((user) => (
        <div
          key={user.id}
          title={user.name}
          className="h-8 w-8 rounded-full border-2 border-white bg-slate-700 text-white flex items-center justify-center text-xs"
        >
          {user.name[0]}
        </div>
      ))}
    </div>
  );
}

export default memo(PresenceIndicator);