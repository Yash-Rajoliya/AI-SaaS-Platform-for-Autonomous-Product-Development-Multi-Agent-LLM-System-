import { useQuery } from "@tanstack/react-query";
import governanceService from "../services/governance.service";

export default function Governance() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["governance"],
    queryFn: governanceService.getOverview
  });

  if (isLoading) return <div className="p-8">Loading governance...</div>;
  if (error) return <div className="p-8 text-red-600">Failed to load governance data</div>;

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Governance Center</h1>

      <div className="grid grid-cols-4 gap-4">
        <StatCard title="Policies" value={data.policyCount} />
        <StatCard title="Compliance" value={`${data.complianceScore}%`} />
        <StatCard title="Violations" value={data.violations} />
        <StatCard title="Audits" value={data.audits} />
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="font-semibold mb-4">Recent Policy Evaluations</h2>
        {data.evaluations.map((item) => (
          <div key={item.id} className="border-b py-3">
            <div>{item.name}</div>
            <div className="text-sm text-slate-500">{item.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="rounded-lg border p-4">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="mt-2 text-2xl font-bold">{value}</div>
    </div>
  );
}