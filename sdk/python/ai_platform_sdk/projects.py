class ProjectsAPI:
    def __init__(self, client):
        self.client = client

    def list(self):
        return self.client.get(
            "/projects"
        )

    def get(self, project_id):
        return self.client.get(
            f"/projects/{project_id}"
        )

    def create(self, payload):
        return self.client.post(
            "/projects",
            payload,
        )