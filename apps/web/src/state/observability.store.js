import { create } from "zustand";

export const useObservabilityStore = create((set) => ({
  metrics: {},
  alerts: [],
  incidents: [],

  setMetrics: (metrics) => set({ metrics }),
  setAlerts: (alerts) => set({ alerts }),
  setIncidents: (incidents) => set({ incidents }),
}));