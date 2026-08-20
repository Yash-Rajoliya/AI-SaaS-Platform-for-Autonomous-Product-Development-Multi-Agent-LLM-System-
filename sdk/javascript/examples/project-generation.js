import {
  PlatformClient,
  ProjectsAPI
} from "@autonomous-ai/sdk";

const client = new PlatformClient({
  apiKey: process.env.PLATFORM_API_KEY,
  baseUrl: process.env.PLATFORM_URL
});

const projects = new ProjectsAPI(client);

async function main() {
  try {
    console.log(
      "\n🚀 Creating Autonomous AI SaaS Project...\n"
    );

    const project = await projects.create({
      name: "Enterprise AI Platform",
      description:
        "AI-powered autonomous software development platform"
    });

    console.log("Project Created:");
    console.table(project);

    const allProjects =
      await projects.list();

    console.log(
      `\nTotal Projects: ${allProjects.total}`
    );

    console.table(allProjects.items);
  } catch (error) {
    console.error(
      "Project generation failed",
      error
    );
  }
}

main();