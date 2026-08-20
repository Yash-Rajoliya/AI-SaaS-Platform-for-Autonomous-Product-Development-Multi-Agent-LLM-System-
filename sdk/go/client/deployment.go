package client

func CreateDeployment(
	c *Client,
	payload interface{},
) ([]byte, error) {

	return c.Post(
		"/deployments",
		payload,
	)
}

func GetDeployment(
	c *Client,
	id string,
) ([]byte, error) {

	return c.Get(
		"/deployments/" + id,
	)
}