package client

func CreateExecution(
	c *Client,
	payload interface{},
) ([]byte, error) {

	return c.Post(
		"/executions",
		payload,
	)
}

func GetExecution(
	c *Client,
	id string,
) ([]byte, error) {

	return c.Get(
		"/executions/" + id,
	)
}

func CancelExecution(
	c *Client,
	id string,
) ([]byte, error) {

	return c.Post(
		"/executions/"+id+"/cancel",
		nil,
	)
}