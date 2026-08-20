from tenacity import retry
from tenacity import stop_after_attempt
from tenacity import wait_exponential


retry_policy = retry(
    stop=stop_after_attempt(5),
    wait=wait_exponential(multiplier=1),
    reraise=True,
)