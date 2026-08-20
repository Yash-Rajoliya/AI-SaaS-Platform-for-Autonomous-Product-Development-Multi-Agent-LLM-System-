class AgentsAPI:
    def __init__(self, client):
        self.client = client

    def list(self):
        return self.client.get(
            "/agents"
        )

    def execute(
        self,
        agent_id,
        payload,
    ):
        return self.client.post(
            f"/agents/{agent_id}/execute",
            payload,
        )