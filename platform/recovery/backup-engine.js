export class BackupEngine {
  create(target) {
    return {
      backupId: crypto.randomUUID(),
      target,
      createdAt: new Date().toISOString(),
    };
  }
}