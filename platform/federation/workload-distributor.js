export class WorkloadDistributor {
  assign(workload, cluster) {
    return {
      workloadId: workload.id,
      cluster,
      assignedAt: new Date().toISOString(),
    };
  }
}