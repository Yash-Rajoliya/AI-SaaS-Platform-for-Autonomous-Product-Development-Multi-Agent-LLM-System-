import { useQuery } from "@tanstack/react-query";

export default function Incidents() {
  const { data } = useQuery({
    queryKey: ["incidents"]
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">
        Incident Management
      </h1>

      <div className="space-y-4">
        {data?.map((incident) => (
          <div
            key={incident.id}
            className="border rounded-lg p-5"
          >
            <h3 className="font-semibold">
              {incident.title}
            </h3>

            <p className="text-slate-500 mt-2">
              {incident.description}
            </p>

            <div className="mt-3 text-sm">
              Severity: {incident.severity}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}