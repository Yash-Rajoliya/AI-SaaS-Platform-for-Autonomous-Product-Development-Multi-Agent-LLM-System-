from unittest.mock import Mock

from ai_platform_sdk.client import Client


def test_client_creation():
    client = Client(
        api_key="key",
        base_url="https://api.test.com",
    )

    assert client.base_url == \
        "https://api.test.com"