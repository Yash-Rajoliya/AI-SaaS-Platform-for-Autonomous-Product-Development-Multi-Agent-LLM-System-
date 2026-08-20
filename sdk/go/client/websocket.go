package client

import (
	"github.com/gorilla/websocket"
)

func ConnectWebSocket(
	url string,
) (*websocket.Conn, error) {

	conn,
		_,
		err :=
		websocket.DefaultDialer.Dial(
			url,
			nil,
		)

	return conn, err
}