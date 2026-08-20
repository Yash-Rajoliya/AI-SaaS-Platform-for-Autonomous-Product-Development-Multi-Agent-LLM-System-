package tests

import (
	"testing"

	sdk "github.com/autonomous-ai/platform-sdk-go/client"
)

func TestClientCreation(
	t *testing.T,
) {

	client :=
		sdk.NewClient(
			"https://api.test.com",
			"key",
		)

	if client.APIKey != "key" {
		t.Fatal(
			"client not initialized",
		)
	}
}