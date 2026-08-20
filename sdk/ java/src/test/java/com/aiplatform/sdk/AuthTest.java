package com.aiplatform.sdk;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class AuthTest {

    @Test
    void authClientCreation() {

        Client client =
                new Client(
                        "https://api.test.com",
                        "key"
                );

        AuthClient auth =
                new AuthClient(client);

        assertNotNull(auth);
    }
}