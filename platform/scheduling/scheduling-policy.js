export class SchedulingPolicy {
  evaluate(job) {
    return {
      allowed: true,
      policyVersion: "v1",
      evaluatedAt: new Date().toISOString(),
      jobId: job.id,
    };
  }
}