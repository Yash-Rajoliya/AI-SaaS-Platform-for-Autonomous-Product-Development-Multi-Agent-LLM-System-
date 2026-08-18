import logger from '../utils/logger.js';

export default function loggingMiddleware(
  req,
  _res,
  next,
) {
  logger.info({
    method: req.method,
    path: req.originalUrl,
  });

  next();
}