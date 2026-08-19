export class ConsistencyEngine {
  verify(replicas) {
    const versions = new Set(
      replicas.map((r) => r.version)
    );

    return versions.size === 1;
  }
}