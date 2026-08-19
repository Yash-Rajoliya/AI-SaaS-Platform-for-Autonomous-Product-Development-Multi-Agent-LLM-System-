export class FederationBalancer {
  balance(clusters) {
    return [...clusters].sort(
      (a, b) => a.load - b.load
    )[0];
  }
}