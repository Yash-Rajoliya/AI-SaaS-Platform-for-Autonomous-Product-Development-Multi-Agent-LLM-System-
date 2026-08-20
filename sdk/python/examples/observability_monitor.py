from ai_platform_sdk.client import Client
from ai_platform_sdk.observability import ObservabilityAPI

client = Client(
    api_key="demo",
    base_url="https://api.platform.ai",
)

obs = ObservabilityAPI(client)

print(obs.metrics())
print(obs.health())