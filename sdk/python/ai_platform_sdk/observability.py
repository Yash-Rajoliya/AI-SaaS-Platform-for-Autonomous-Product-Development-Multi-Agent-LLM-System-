class ObservabilityAPI:
    def __init__(self, client):
        self.client = client

    def metrics(self):
        return self.client.get(
            "/observability/metrics"
        )

    def traces(self):
        return self.client.get(
            "/observability/traces"
        )

    def health(self):
        return self.client.get(
            "/health"
        )