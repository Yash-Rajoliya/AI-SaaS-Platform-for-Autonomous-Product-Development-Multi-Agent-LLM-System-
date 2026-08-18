import { useQueries } from "@tanstack/react-query";
import { observabilityService } from "../services/observability.service";

export function useObservability() {
  const results = useQueries({
    queries: [
      {
        queryKey: ["metrics"],
        queryFn: async () => {
          const { data } = await observabilityService.getMetrics();
          return data;
        },
      },
      {
        queryKey: ["alerts"],
        queryFn: async () => {
          const { data } = await observabilityService.getAlerts();
          return data;
        },
      },
      {
        queryKey: ["incidents"],
        queryFn: async () => {
          const { data } = await observabilityService.getIncidents();
          return data;
        },
      },
    ],
  });

  return {
    metrics: results[0],
    alerts: results[1],
    incidents: results[2],
  };
}