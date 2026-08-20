class ExecutionAPI:
    def __init__(self, client):
        self.client = client

    def create(self, payload):
        return self.client.post(
            "/executions",
            payload,
        )

    def get(self, execution_id):
        return self.client.get(
            f"/executions/{execution_id}"
        )

    def cancel(self, execution_id):
        return self.client.post(
            f"/executions/{execution_id}/cancel"
        )