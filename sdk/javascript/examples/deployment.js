import {
  PlatformClient,
  DeploymentsAPI
} from "@autonomous-ai/sdk";

const client = new PlatformClient({
  apiKey: process.env.PLATFORM_API_KEY,
  baseUrl: process.env.PLATFORM_URL
});

const deployments =
  new DeploymentsAPI(client);

async function main() {
  try {
    console.log(
      "\n🚀 Triggering Production Deployment...\n"
    );

    const deployment =
      await deployments.create({
        projectId:
          "enterprise-ai-platform",
        environment: "production"
      });

    console.log(
      "\nDeployment Created:"
    );

    console.table(deployment);

    const status =
      await deployments.get(
        deployment.id
      );

    console.log(
      "\nCurrent Deployment Status:"
    );

    console.table(status);

    if (
      status.status === "FAILED"
    ) {
      console.log(
        "\nInitiating Rollback..."
      );

      await deployments.rollback(
        deployment.id
      );

      console.log(
        "Rollback triggered successfully."
      );
    }
  } catch (error) {
    console.error(
      "Deployment operation failed",
      error
    );
  }
}

main();