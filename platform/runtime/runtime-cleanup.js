export class RuntimeCleanup {
  async cleanup(runtimes) {
    const removed = [];

    for (const runtime of runtimes) {
      if (
        runtime.status === "terminated" ||
        runtime.status === "failed"
      ) {
        removed.push(runtime.id);
      }
    }

    return {
      removed,
      totalRemoved: removed.length,
      cleanedAt: new Date().toISOString(),
    };
  }

  async garbageCollect(tempArtifacts) {
    return {
      removedArtifacts: tempArtifacts.length,
      timestamp: new Date().toISOString(),
    };
  }
}