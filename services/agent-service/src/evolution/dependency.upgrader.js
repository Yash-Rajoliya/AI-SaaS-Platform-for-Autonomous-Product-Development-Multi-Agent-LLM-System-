export class DependencyUpgrader {
  evaluate(packages = []) {
    return packages.map((pkg) => ({
      name: pkg.name,
      current: pkg.version,
      upgradeAvailable: true,
    }));
  }

  prioritize(packages = []) {
    return packages.sort(
      (a, b) =>
        (b.severity || 0) -
        (a.severity || 0),
    );
  }
}