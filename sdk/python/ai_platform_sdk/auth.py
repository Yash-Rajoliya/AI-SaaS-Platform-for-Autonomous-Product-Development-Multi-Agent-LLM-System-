class AuthAPI:
    def __init__(self, client):
        self.client = client

    def login(
        self,
        email: str,
        password: str,
    ):
        return self.client.post(
            "/auth/login",
            {
                "email": email,
                "password": password,
            },
        )

    def register(self, payload):
        return self.client.post(
            "/auth/register",
            payload,
        )

    def logout(self):
        return self.client.post(
            "/auth/logout"
        )