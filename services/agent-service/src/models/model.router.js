export class ModelRouter {
  constructor(providers = {}) {
    this.providers = providers;
  }

  getProvider(name) {
    const provider =
      this.providers[name];

    if (!provider) {
      throw new Error(
        `Provider not found: ${name}`,
      );
    }

    return provider;
  }

  async generate(
    providerName,
    payload,
  ) {
    const provider =
      this.getProvider(providerName);

    return provider.generate(payload);
  }
}