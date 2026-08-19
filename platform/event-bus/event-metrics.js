export class EventMetrics {
  constructor() {
    this.published = 0;
  }

  incrementPublished() {
    this.published++;
  }

  summary() {
    return {
      published: this.published,
    };
  }
}