export class DependencyUpgrader {
  identifyUpdates(packages = []) {
    return packages.filter(
      dependency =>
        dependency.currentVersion !==
        dependency.latestVersion
    );
  }

  createUpgradePlan(packages = []) {
    return this.identifyUpdates(packages).map(
      dependency => ({
        package: dependency.name,
        from: dependency.currentVersion,
        to: dependency.latestVersion,
        risk:
          dependency.majorUpgrade
            ? "high"
            : "low",
      })
    );
  }
}