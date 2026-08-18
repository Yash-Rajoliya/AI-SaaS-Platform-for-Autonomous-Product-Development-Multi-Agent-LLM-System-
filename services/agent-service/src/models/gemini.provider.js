export class GeminiProvider {
  constructor(client) {
    this.client = client;
  }

  async generate(payload) {
    return {
      provider: "gemini",
      payload,
      status: "stub",
    };
  }
}