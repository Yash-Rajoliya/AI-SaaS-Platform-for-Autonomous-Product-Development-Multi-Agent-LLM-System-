export class SchedulingBalancer {
  balance(nodes) {
    return nodes.sort(
      (a, b) => a.currentLoad - b.currentLoad
    );
  }

  select(nodes) {
    return this.balance(nodes)[0];
  }
}