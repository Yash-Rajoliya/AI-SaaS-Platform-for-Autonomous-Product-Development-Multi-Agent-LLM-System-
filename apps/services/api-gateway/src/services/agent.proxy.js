import axios from 'axios';

import { env } from '../config/env.js';

export async function listProjects(
  _req,
  res,
  next,
) {
  try {
    const response = await axios.get(
      `${env.agentServiceUrl}/projects`,
    );

    res.json(response.data);
  } catch (error) {
    next(error);
  }
}