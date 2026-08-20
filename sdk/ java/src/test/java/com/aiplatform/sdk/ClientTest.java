package com.aiplatform.sdk;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ClientTest {

    @Test
    void clientCreation() {

        Client client =
                new Client(
                        "https://api.test.com",
                        "key"
                );

        assertNotNull(client);
    }
}