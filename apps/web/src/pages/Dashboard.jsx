import { useQuery } from "@tanstack/react-query";

import AgentCard from "../components/dashboard/AgentCard";
import ActivityFeed from "../components/dashboard/ActivityFeed";
import MetricsPanel from "../components/dashboard/MetricsPanel";
import WorkflowGraph from "../components/dashboard/WorkflowGraph";

import agentService from "../services/agent.service";

export default function Dashboard() {
  const { data, isLoading } = useQuery({
    queryKey: ["dashboard"],
    queryFn: () => agentService.dashboard()
  });

  if (isLoading) {
    return (
      <div className="p-10">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-8 p-8">
      <header>
        <h1 className="text-3xl font-bold">
          Platform Dashboard
        </h1>
      </header>

      <MetricsPanel metrics={data.metrics} />

      <div className="grid grid-cols-4 gap-6">
        {data.agents.map((agent) => (
          <AgentCard
            key={agent.id}
            agent={agent}
          />
        ))}
      </div>

      <WorkflowGraph workflow={data.workflow} />

      <ActivityFeed
        activities={data.activities}
      />
    </div>
  );
}