import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { agentService } from "../services/agent.service";

const QUERY_KEY = ["agents"];

export function useAgents() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () => {
      const { data } = await agentService.getAgents();
      return data;
    },
    staleTime: 60_000,
    retry: 2,
  });
}

export function useCreateAgent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => agentService.createAgent(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY });
    },
  });
}

export function useDeleteAgent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (agentId) => agentService.deleteAgent(agentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY });
    },
  });
}