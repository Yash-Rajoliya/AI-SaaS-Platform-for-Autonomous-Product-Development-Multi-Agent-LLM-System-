export class StateRecovery {
  restore(snapshot) {
    return {
      restored: true,
      snapshotId: snapshot.id,
      restoredAt: new Date().toISOString(),
    };
  }
}