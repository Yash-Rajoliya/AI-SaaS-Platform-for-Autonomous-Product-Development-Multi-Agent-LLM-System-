class PlatformError(Exception):
    pass


class AuthenticationError(PlatformError):
    pass


class ValidationError(PlatformError):
    pass


class NotFoundError(PlatformError):
    pass


class RateLimitError(PlatformError):
    pass