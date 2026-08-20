import {
  PlatformClient,
  ObservabilityAPI
} from "@autonomous-ai/sdk";

const client = new PlatformClient({
  apiKey: process.env.PLATFORM_API_KEY,
  baseUrl: process.env.PLATFORM_URL
});

const observability =
  new ObservabilityAPI(client);

async function main() {
  try {
    console.log(
      "\n📊 Platform Health Report\n"
    );

    const health =
      await observability.health();

    console.log(
      "\nService Health:"
    );

    console.table(
      health.services
    );

    const metrics =
      await observability.metrics(
        "system_cpu_usage"
      );

    console.log(
      "\nMetric:",
      metrics.metric
    );

    console.table(metrics.values);

    const traces =
      await observability.traces();

    console.log(
      `\nRecent Traces: ${traces.length}`
    );

    console.table(
      traces.slice(0, 10)
    );

    if (traces.length > 0) {
      const trace =
        await observability.trace(
          traces[0].traceId
        );

      console.log(
        "\nTrace Details:"
      );

      console.table(trace);
    }
  } catch (error) {
    console.error(
      "Observability query failed",
      error
    );
  }
}

main();