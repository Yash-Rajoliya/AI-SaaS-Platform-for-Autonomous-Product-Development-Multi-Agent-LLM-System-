package com.aiplatform.sdk;

public class ObservabilityClient {

    private final Client client;

    public ObservabilityClient(
            Client client
    ) {
        this.client = client;
    }

    public String metrics()
            throws Exception {

        return client.get(
                "/observability/metrics"
        );
    }

    public String traces()
            throws Exception {

        return client.get(
                "/observability/traces"
        );
    }
}