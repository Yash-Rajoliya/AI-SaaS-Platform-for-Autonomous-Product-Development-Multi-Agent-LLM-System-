import httpx

from .utils import build_headers


class Client:
    def __init__(
        self,
        api_key: str,
        base_url: str,
        timeout: int = 30,
    ):
        self.api_key = api_key
        self.base_url = base_url.rstrip("/")

        self.http = httpx.Client(
            timeout=timeout,
            headers=build_headers(api_key),
        )

    def get(self, path: str):
        response = self.http.get(
            f"{self.base_url}{path}"
        )
        response.raise_for_status()
        return response.json()

    def post(self, path: str, payload=None):
        response = self.http.post(
            f"{self.base_url}{path}",
            json=payload or {},
        )
        response.raise_for_status()
        return response.json()