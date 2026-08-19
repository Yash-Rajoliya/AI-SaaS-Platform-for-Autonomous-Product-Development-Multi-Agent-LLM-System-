export class ScalingOptimizer {
  recommend(workloads = []) {
    return workloads.map(workload => {
      const cpu = workload.cpuUsage || 0;

      let action = "maintain";

      if (cpu > 80) action = "scale-out";
      else if (cpu < 20) action = "scale-in";

      return {
        service: workload.service,
        action,
        currentReplicas:
          workload.currentReplicas || 1,
        recommendedReplicas:
          this.calculateReplicas(workload),
      };
    });
  }

  calculateReplicas(workload) {
    const replicas =
      Math.ceil((workload.cpuUsage || 50) / 50);

    return Math.max(1, replicas);
  }
}