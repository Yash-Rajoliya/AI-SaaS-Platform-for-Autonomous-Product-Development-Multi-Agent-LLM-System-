package main

import (
	"fmt"

	sdk "github.com/autonomous-ai/platform-sdk-go/client"
)

func main() {

	client :=
		sdk.NewClient(
			"https://api.platform.ai",
			"demo-key",
		)

	data, err :=
		client.Get(
			"/observability/metrics",
		)

	if err != nil {
		panic(err)
	}

	fmt.Println(
		string(data),
	)
}