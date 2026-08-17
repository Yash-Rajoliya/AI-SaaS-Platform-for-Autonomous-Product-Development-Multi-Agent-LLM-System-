import { useQuery } from "@tanstack/react-query";

export default function Security() {
  const { data } = useQuery({
    queryKey: ["security"]
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Security Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <SecurityMetric
          title="Threats Blocked"
          value={data?.blocked ?? 0}
        />

        <SecurityMetric
          title="Vulnerabilities"
          value={data?.vulnerabilities ?? 0}
        />

        <SecurityMetric
          title="Risk Score"
          value={data?.riskScore ?? "N/A"}
        />
      </div>
    </div>
  );
}

function SecurityMetric({
  title,
  value
}) {
  return (
    <div className="border rounded-lg p-5">
      <div className="text-sm">{title}</div>
      <div className="text-3xl font-bold mt-2">
        {value}
      </div>
    </div>
  );
}