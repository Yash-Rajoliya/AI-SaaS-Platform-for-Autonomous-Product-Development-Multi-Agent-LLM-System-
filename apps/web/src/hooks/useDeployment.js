import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deploymentService } from "../services/deployment.service";

const QUERY_KEY = ["deployments"];

export function useDeployments() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () => {
      const { data } = await deploymentService.getDeployments();
      return data;
    },
    staleTime: 30000,
  });
}

export function useCreateDeployment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deploymentService.createDeployment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY });
    },
  });
}