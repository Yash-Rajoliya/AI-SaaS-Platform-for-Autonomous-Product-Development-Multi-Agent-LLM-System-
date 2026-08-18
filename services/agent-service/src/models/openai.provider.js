export class OpenAIProvider {
  constructor(client) {
    this.client = client;
  }

  async generate(payload) {
    return {
      provider: "openai",
      payload,
      status: "stub",
    };
  }
}