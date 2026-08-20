package com.aiplatform.sdk;

public class DeploymentClient {

    private final Client client;

    public DeploymentClient(
            Client client
    ) {
        this.client = client;
    }

    public String createDeployment(
            String payload
    ) throws Exception {

        return client.post(
                "/deployments",
                payload
        );
    }

    public String getDeployment(
            String id
    ) throws Exception {

        return client.get(
                "/deployments/" + id
        );
    }
}