import logging

logger = logging.getLogger(
    "ai-platform-sdk"
)


def track(
    event: str,
    metadata: dict | None = None,
):
    logger.info(
        "event=%s metadata=%s",
        event,
        metadata or {},
    )