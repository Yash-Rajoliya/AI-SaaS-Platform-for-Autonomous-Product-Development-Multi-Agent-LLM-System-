package client

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

type Client struct {
	BaseURL    string
	APIKey     string
	HTTPClient *http.Client
}

func NewClient(
	baseURL string,
	apiKey string,
) *Client {
	return &Client{
		BaseURL: baseURL,
		APIKey:  apiKey,
		HTTPClient: &http.Client{
			Timeout: 30 * time.Second,
		},
	}
}

func (c *Client) Get(path string) ([]byte, error) {
	req, err := http.NewRequest(
		http.MethodGet,
		c.BaseURL+path,
		nil,
	)

	if err != nil {
		return nil, err
	}

	req.Header.Set(
		"Authorization",
		"Bearer "+c.APIKey,
	)

	resp, err :=
		c.HTTPClient.Do(req)

	if err != nil {
		return nil, err
	}

	defer resp.Body.Close()

	return io.ReadAll(resp.Body)
}

func (c *Client) Post(
	path string,
	payload interface{},
) ([]byte, error) {

	body, _ :=
		json.Marshal(payload)

	req, err := http.NewRequest(
		http.MethodPost,
		c.BaseURL+path,
		bytes.NewBuffer(body),
	)

	if err != nil {
		return nil, err
	}

	req.Header.Set(
		"Authorization",
		"Bearer "+c.APIKey,
	)

	req.Header.Set(
		"Content-Type",
		"application/json",
	)

	resp, err :=
		c.HTTPClient.Do(req)

	if err != nil {
		return nil, err
	}

	defer resp.Body.Close()

	if resp.StatusCode >= 400 {
		return nil,
			fmt.Errorf(
				"request failed: %d",
				resp.StatusCode,
			)
	}

	return io.ReadAll(resp.Body)
}