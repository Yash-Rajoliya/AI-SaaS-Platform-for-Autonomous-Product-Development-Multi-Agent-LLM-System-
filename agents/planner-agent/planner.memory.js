export class PlannerMemory {
  constructor() {
    this.plans = [];
  }

  async storePlan(plan) {
    this.plans.push({
      ...plan,
      timestamp:
        new Date().toISOString(),
    });
  }

  async getContext() {
    return {
      previousPlans:
        this.plans.slice(-10),
    };
  }

  async clear() {
    this.plans = [];
  }
}