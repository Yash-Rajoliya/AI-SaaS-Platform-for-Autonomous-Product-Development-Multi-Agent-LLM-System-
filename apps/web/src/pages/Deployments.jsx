import { useQuery } from "@tanstack/react-query";
import deploymentService from "../services/deployment.service";

export default function Deployments() {
  const { data } = useQuery({
    queryKey: ["deployments"],
    queryFn: deploymentService.list
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Deployments
      </h1>

      <div className="space-y-4">
        {data?.map((deployment) => (
          <div
            key={deployment.id}
            className="border rounded-lg p-4"
          >
            <div className="font-semibold">
              {deployment.version}
            </div>

            <div className="text-sm text-slate-500">
              {deployment.environment}
            </div>

            <div className="mt-2">
              {deployment.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}