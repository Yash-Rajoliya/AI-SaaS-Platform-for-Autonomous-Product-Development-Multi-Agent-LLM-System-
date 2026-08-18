import axios from 'axios';

import { env } from '../config/env.js';

export async function startExecution(
  req,
  res,
  next,
) {
  try {
    const response = await axios.post(
      `${env.executionServiceUrl}/execute`,
      req.body,
    );

    res.json(response.data);
  } catch (error) {
    next(error);
  }
}