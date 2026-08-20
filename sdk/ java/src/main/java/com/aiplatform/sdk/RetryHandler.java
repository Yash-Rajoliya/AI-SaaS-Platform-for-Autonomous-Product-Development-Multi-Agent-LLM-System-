package com.aiplatform.sdk;

public final class RetryHandler {

    private RetryHandler() {}

    public static void retry(
            Retryable operation,
            int maxAttempts
    ) throws Exception {

        int attempts = 0;

        while (true) {

            try {
                operation.execute();
                return;
            }
            catch (Exception ex) {

                attempts++;

                if (attempts >= maxAttempts) {
                    throw ex;
                }

                Thread.sleep(
                        attempts * 1000L
                );
            }
        }
    }

    @FunctionalInterface
    public interface Retryable {
        void execute() throws Exception;
    }
}