export class QueueScheduler {
  constructor() {
    this.queue = [];
  }

  enqueue(job) {
    this.queue.push(job);
    return job;
  }

  dequeue() {
    return this.queue.shift();
  }

  size() {
    return this.queue.length;
  }
}