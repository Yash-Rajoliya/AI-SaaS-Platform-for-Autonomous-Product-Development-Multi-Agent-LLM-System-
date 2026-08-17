import { useQuery } from "@tanstack/react-query";

import CostAnalytics from "../components/dashboard/CostAnalytics";
import ReliabilityPanel from "../components/dashboard/ReliabilityPanel";

import observabilityService from "../services/observability.service";

export default function Analytics() {
  const { data, isLoading } = useQuery({
    queryKey: ["analytics"],
    queryFn: () =>
      observabilityService.analytics()
  });

  if (isLoading) {
    return (
      <div className="p-8">
        Loading analytics...
      </div>
    );
  }

  return (
    <div className="space-y-8 p-8">
      <h1 className="text-3xl font-bold">
        Analytics
      </h1>

      <CostAnalytics
        data={data.costs}
      />

      <ReliabilityPanel
        metrics={data.reliability}
      />

      <div className="rounded-xl border p-6">
        <h2 className="font-semibold mb-4">
          AI Runtime Metrics
        </h2>

        <div className="grid grid-cols-4 gap-4">
          <Metric
            title="Tokens"
            value={data.tokens}
          />

          <Metric
            title="Executions"
            value={data.executions}
          />

          <Metric
            title="Latency"
            value={`${data.latency}ms`}
          />

          <Metric
            title="Cost"
            value={`$${data.cost}`}
          />
        </div>
      </div>
    </div>
  );
}

function Metric({
  title,
  value
}) {
  return (
    <div className="rounded border p-4">
      <div className="text-sm text-slate-500">
        {title}
      </div>

      <div className="mt-2 text-2xl font-bold">
        {value}
      </div>
    </div>
  );
}