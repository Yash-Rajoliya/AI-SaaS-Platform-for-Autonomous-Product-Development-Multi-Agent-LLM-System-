package com.aiplatform.sdk;

public final class Exceptions {

    private Exceptions() {}

    public static class SDKException
            extends RuntimeException {

        public SDKException(
                String message
        ) {
            super(message);
        }
    }

    public static class AuthenticationException
            extends SDKException {

        public AuthenticationException(
                String message
        ) {
            super(message);
        }
    }

    public static class ExecutionException
            extends SDKException {

        public ExecutionException(
                String message
        ) {
            super(message);
        }
    }

    public static class DeploymentException
            extends SDKException {

        public DeploymentException(
                String message
        ) {
            super(message);
        }
    }
}