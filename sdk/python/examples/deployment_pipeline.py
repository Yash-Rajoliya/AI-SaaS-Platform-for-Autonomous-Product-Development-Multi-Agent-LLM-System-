from ai_platform_sdk.client import Client
from ai_platform_sdk.deployments import DeploymentsAPI

client = Client(
    api_key="demo",
    base_url="https://api.platform.ai",
)

deployments = DeploymentsAPI(client)

deployment = deployments.create(
    {
        "projectId": "project-1",
        "environment": "prod",
    }
)

print(deployment)