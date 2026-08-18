export class ThreatModeler {
  generate(system = {}) {
    return {
      system: system.name,
      assets: system.assets || [],
      attackVectors: [
        "credential-compromise",
        "supply-chain-attack",
        "api-abuse",
      ],
      mitigations: [
        "mfa",
        "least-privilege",
        "rate-limiting",
      ],
    };
  }

  riskScore(model = {}) {
    return (
      (model.attackVectors?.length || 0) *
      10
    );
  }
}