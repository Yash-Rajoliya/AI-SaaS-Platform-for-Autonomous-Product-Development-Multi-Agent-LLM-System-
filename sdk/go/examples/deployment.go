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

	result, err :=
		sdk.CreateDeployment(
			client,
			map[string]interface{}{
				"projectId": "proj-1",
				"environment": "prod",
			},
		)

	if err != nil {
		panic(err)
	}

	fmt.Println(
		string(result),
	)
}