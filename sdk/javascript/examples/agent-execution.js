import {
  PlatformClient,
  AgentsAPI
} from "@autonomous-ai/sdk";

const client = new PlatformClient({
  apiKey: process.env.PLATFORM_API_KEY,
  baseUrl: process.env.PLATFORM_URL
});

const agents = new AgentsAPI(client);

async function main() {
  try {
    console.log(
      "\n🤖 Discovering Available Agents...\n"
    );

    const availableAgents =
      await agents.list();

    console.table(availableAgents);

    const plannerAgent =
      availableAgents.find(
        a => a.type === "planner"
      );

    if (!plannerAgent) {
      throw new Error(
        "Planner agent not found"
      );
    }

    console.log(
      `\nExecuting Agent: ${plannerAgent.name}`
    );

    const execution =
      await agents.execute(
        plannerAgent.id,
        {
          prompt:
            "Design a globally distributed SaaS platform with multi-region deployment support.",
          context: {
            priority: "high",
            architecture: "microservices"
          }
        }
      );

    console.log(
      "\nExecution Started:"
    );

    console.table(execution);
  } catch (error) {
    console.error(
      "Agent execution failed",
      error
    );
  }
}

main();