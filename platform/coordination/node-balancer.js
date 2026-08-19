export class NodeBalancer {
  select(nodes) {
    return [...nodes].sort(
      (a, b) => a.load - b.load
    )[0];
  }
}