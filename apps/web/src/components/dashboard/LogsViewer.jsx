import React, {
  memo,
  useMemo,
  useState
} from "react";

import Card from "@/components/common/Card";
import Input from "@/components/common/Input";

function LogsViewer({
  logs = [],
  loading = false
}) {
  const [filter, setFilter] =
    useState("");

  const filteredLogs = useMemo(() => {
    if (!filter) return logs;

    return logs.filter((log) =>
      JSON.stringify(log)
        .toLowerCase()
        .includes(filter.toLowerCase())
    );
  }, [logs, filter]);

  return (
    <Card className="h-full">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold">
          Logs Viewer
        </h3>

        <div className="w-72">
          <Input
            placeholder="Search logs..."
            value={filter}
            onChange={(e) =>
              setFilter(
                e.target.value
              )
            }
          />
        </div>
      </div>

      {loading ? (
        <div>Loading logs...</div>
      ) : (
        <div className="max-h-[500px] overflow-auto rounded-lg bg-slate-950 p-4 text-sm text-green-400 font-mono">
          {filteredLogs.map((log) => (
            <div
              key={log.id}
              className="mb-2"
            >
              [{log.timestamp}]{" "}
              {log.level.toUpperCase()}{" "}
              {log.message}
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

export default memo(
  LogsViewer
);