export class HeartbeatManager {
  heartbeat(nodeId) {
    return {
      nodeId,
      receivedAt: new Date().toISOString(),
    };
  }
}