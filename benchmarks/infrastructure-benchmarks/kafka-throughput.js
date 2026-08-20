export class KafkaThroughputBenchmark {
  calculate(messages, seconds) {
    return {
      messagesProduced: messages,
      durationSeconds: seconds,
      throughput:
        messages / seconds,
    };
  }
}