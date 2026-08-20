from ai_platform_sdk.client import Client
from ai_platform_sdk.projects import ProjectsAPI

client = Client(
    api_key="demo",
    base_url="https://api.platform.ai",
)

projects = ProjectsAPI(client)

project = projects.create(
    {
        "name": "Enterprise AI Platform"
    }
)

print(project)