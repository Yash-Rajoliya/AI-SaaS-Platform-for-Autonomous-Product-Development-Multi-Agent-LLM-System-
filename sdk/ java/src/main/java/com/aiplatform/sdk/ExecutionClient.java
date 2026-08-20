package com.aiplatform.sdk;

public class ExecutionClient {

    private final Client client;

    public ExecutionClient(
            Client client
    ) {
        this.client = client;
    }

    public String createExecution(
            String payload
    ) throws Exception {

        return client.post(
                "/executions",
                payload
        );
    }

    public String getExecution(
            String id
    ) throws Exception {

        return client.get(
                "/executions/" + id
        );
    }

    public String cancelExecution(
            String id
    ) throws Exception {

        return client.post(
                "/executions/" + id + "/cancel",
                "{}"
        );
    }
}