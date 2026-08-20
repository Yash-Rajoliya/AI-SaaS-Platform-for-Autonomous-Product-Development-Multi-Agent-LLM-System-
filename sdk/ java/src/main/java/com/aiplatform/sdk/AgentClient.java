package com.aiplatform.sdk;

public class AgentClient {

    private final Client client;

    public AgentClient(
            Client client
    ) {
        this.client = client;
    }

    public String listAgents()
            throws Exception {

        return client.get(
                "/agents"
        );
    }

    public String executeAgent(
            String payload
    ) throws Exception {

        return client.post(
                "/agents/execute",
                payload
        );
    }
}