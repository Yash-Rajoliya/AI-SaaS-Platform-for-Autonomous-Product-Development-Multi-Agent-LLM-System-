export class DistributedScheduler {
  constructor() {
    this.nodes = [];
  }

  registerNode(node) {
    this.nodes.push(node);
  }

  assign(job) {
    const node =
      this.nodes[Math.floor(Math.random() * this.nodes.length)];

    return {
      nodeId: node?.id,
      jobId: job.id,
      assignedAt: new Date().toISOString(),
    };
  }
}