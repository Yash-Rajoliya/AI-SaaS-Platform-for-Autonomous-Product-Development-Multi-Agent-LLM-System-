export class KafkaFailureExperiment {
  async simulateBrokerFailure() {
    return {
      brokerDown: true,
      retryMechanismActivated: true,
    };
  }
}