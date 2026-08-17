import React, { memo } from "react";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

const statusVariant = {
  running: "success",
  idle: "info",
  warning: "warning",
  failed: "error"
};

function AgentCard({
  agent,
  onExecute,
  onViewDetails
}) {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-lg">
            {agent.name}
          </h3>

          <p className="text-sm text-slate-500">
            {agent.type}
          </p>
        </div>

        <Badge
          variant={
            statusVariant[agent.status] ||
            "info"
          }
        >
          {agent.status}
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Metric
          label="Executions"
          value={agent.executions}
        />

        <Metric
          label="Success Rate"
          value={`${agent.successRate}%`}
        />

        <Metric
          label="Latency"
          value={`${agent.latency}ms`}
        />

        <Metric
          label="Cost"
          value={`$${agent.cost}`}
        />
      </div>

      <div className="flex gap-2">
        <Button
          onClick={() =>
            onExecute?.(agent)
          }
        >
          Execute
        </Button>

        <Button
          variant="secondary"
          onClick={() =>
            onViewDetails?.(agent)
          }
        >
          Details
        </Button>
      </div>
    </Card>
  );
}

function Metric({
  label,
  value
}) {
  return (
    <div>
      <div className="text-xs text-slate-500">
        {label}
      </div>

      <div className="font-semibold">
        {value}
      </div>
    </div>
  );
}

export default memo(AgentCard);