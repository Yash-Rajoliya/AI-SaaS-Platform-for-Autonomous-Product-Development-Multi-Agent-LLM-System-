import { EventRouter } from "./event-router.js";
import { EventMetrics } from "./event-metrics.js";

export class EventBus {
  constructor() {
    this.router = new EventRouter();
    this.metrics = new EventMetrics();
  }

  publish(event) {
    this.metrics.incrementPublished();
    return this.router.route(event);
  }
}