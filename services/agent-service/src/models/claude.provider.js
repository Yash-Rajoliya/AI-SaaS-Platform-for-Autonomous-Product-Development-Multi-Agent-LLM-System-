export class ClaudeProvider {
  constructor(client) {
    this.client = client;
  }

  async generate(payload) {
    return {
      provider: "claude",
      payload,
      status: "stub",
    };
  }
}