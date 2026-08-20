class DeploymentsAPI:
    def __init__(self, client):
        self.client = client

    def create(self, payload):
        return self.client.post(
            "/deployments",
            payload,
        )

    def status(self, deployment_id):
        return self.client.get(
            f"/deployments/{deployment_id}"
        )