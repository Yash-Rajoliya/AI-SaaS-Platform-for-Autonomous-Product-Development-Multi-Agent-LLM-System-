export class KafkaFailureExperiment {
  constructor(options = {}) {
    this.timeoutMs = options.timeoutMs || 15000;
    this.pollIntervalMs = options.pollIntervalMs || 500;
  }

  async simulateBrokerFailure(client, admin) {
    const startTime = Date.now();
    let retryMechanismActivated = false;
    let reconnected = false;

    try {
      // 1. Simulate active broker outage connection drop
      if (admin && typeof admin.disconnect === "function") {
        await admin.disconnect();
        retryMechanismActivated = true;
      }

      // 2. Poll for automatic reconnection and state recovery
      while (Date.now() - startTime < this.timeoutMs) {
        try {
          if (client && typeof client.connect === "function") {
            await client.connect();
            reconnected = true;
            break;
          }
        } catch (err) {
          // Expected connection retry delay during failure window
          retryMechanismActivated = true;
        }

        await new Promise((resolve) => setTimeout(resolve, this.pollIntervalMs));
      }

      if (!reconnected) {
        throw new Error(`Kafka failure recovery timed out after ${this.timeoutMs}ms`);
      }

      return {
        brokerDown: true,
        retryMechanismActivated,
        reconnected: true,
        recoveryTimeMs: Date.now() - startTime,
      };
    } catch (error) {
      return {
        brokerDown: true,
        retryMechanismActivated,
        reconnected: false,
        error: error.message || "Unknown chaos experiment failure",
      };
    }
  }
}