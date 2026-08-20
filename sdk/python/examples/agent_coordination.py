from ai_platform_sdk.client import Client
from ai_platform_sdk.agents import AgentsAPI

client = Client(
    api_key="demo",
    base_url="https://api.platform.ai",
)

agents = AgentsAPI(client)

result = agents.execute(
    "planner-agent",
    {
        "prompt":
        "Create architecture for global SaaS"
    }
)

print(result)