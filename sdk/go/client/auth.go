package client

func Login(
	c *Client,
	email string,
	password string,
) ([]byte, error) {

	payload := map[string]string{
		"email":    email,
		"password": password,
	}

	return c.Post(
		"/auth/login",
		payload,
	)
}

func Logout(
	c *Client,
) ([]byte, error) {
	return c.Post(
		"/auth/logout",
		nil,
	)
}