package client

import (
	"github.com/cenkalti/backoff/v4"
)

func Retry(
	operation func() error,
) error {

	return backoff.Retry(
		operation,
		backoff.NewExponentialBackOff(),
	)
}