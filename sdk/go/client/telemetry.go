package client

import (
	"log"
	"time"
)

func Track(
	event string,
	metadata map[string]interface{},
) {

	log.Printf(
		"[telemetry] %s %v %s",
		event,
		metadata,
		time.Now().UTC(),
	)
}