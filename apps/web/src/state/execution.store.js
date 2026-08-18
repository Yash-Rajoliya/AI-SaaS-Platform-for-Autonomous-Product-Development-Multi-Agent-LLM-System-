import { create } from "zustand";

export const useExecutionStore = create((set) => ({
  executions: [],

  setExecutions: (executions) =>
    set({
      executions,
    }),

  appendExecution: (execution) =>
    set((state) => ({
      executions: [...state.executions, execution],
    })),
}));