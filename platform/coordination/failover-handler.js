export class FailoverHandler {
  handle(primary, replicas) {
    const replacement = replicas[0];

    return {
      failedNode: primary.id,
      replacementNode: replacement?.id,
      executedAt: new Date().toISOString(),
    };
  }
}