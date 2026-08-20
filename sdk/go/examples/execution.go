package main

import (
	"fmt"

	sdk "github.com/autonomous-ai/platform-sdk-go/client"
)

func main() {

	client :=
		sdk.NewClient(
			"https://api.platform.ai",
			"demo-api-key",
		)

	result, err :=
		sdk.CreateExecution(
			client,
			map[string]interface{}{
				"prompt":
				"Generate SaaS architecture",
			},
		)

	if err != nil {
		panic(err)
	}

	fmt.Println(
		string(result),
	)
}