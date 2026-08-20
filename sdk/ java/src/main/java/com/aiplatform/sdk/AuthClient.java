package com.aiplatform.sdk;

public class AuthClient {

    private final Client client;

    public AuthClient(
            Client client
    ) {
        this.client = client;
    }

    public String login(
            String payload
    ) throws Exception {

        return client.post(
                "/auth/login",
                payload
        );
    }

    public String logout()
            throws Exception {

        return client.post(
                "/auth/logout",
                "{}"
        );
    }
}