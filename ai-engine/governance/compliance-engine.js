export class ComplianceEngine {
  async evaluate(project) {
    const checks = {
      encryptionEnabled:
        Boolean(project.encryption),

      auditLoggingEnabled:
        Boolean(project.auditLogging),

      backupsEnabled:
        Boolean(project.backups),
    };

    const compliant =
      Object.values(checks).every(Boolean);

    return {
      compliant,
      checks,
      score:
        Object.values(checks).filter(Boolean).length /
        Object.keys(checks).length,
    };
  }
}