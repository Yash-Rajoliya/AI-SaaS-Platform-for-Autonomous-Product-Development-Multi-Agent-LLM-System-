package com.aiplatform.sdk;

import java.time.Instant;
import java.util.Map;

public class Telemetry {

    public static void track(
            String event,
            Map<String, Object> metadata
    ) {

        System.out.println(
                "[telemetry] " +
                        Instant.now() +
                        " event=" + event +
                        " metadata=" + metadata
        );
    }
}