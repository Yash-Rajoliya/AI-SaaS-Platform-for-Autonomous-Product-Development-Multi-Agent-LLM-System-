package com.aiplatform.sdk;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ExecutionTest {

    @Test
    void executionClientCreation() {

        Client client =
                new Client(
                        "https://api.test.com",
                        "key"
                );

        ExecutionClient execution =
                new ExecutionClient(client);

        assertNotNull(execution);
    }
}