import axios from 'axios';

import { env } from '../config/env.js';

export async function login(
  req,
  res,
  next,
) {
  try {
    const response = await axios.post(
      `${env.authServiceUrl}/login`,
      req.body,
    );

    res.json(response.data);
  } catch (error) {
    next(error);
  }
}

export async function register(
  req,
  res,
  next,
) {
  try {
    const response = await axios.post(
      `${env.authServiceUrl}/register`,
      req.body,
    );

    res.json(response.data);
  } catch (error) {
    next(error);
  }
}