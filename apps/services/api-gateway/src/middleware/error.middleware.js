import logger from '../utils/logger.js';

export default function errorMiddleware(
  err,
  req,
  res,
  next,
) {
  logger.error(err);

  return res.status(500).json({
    success: false,
    traceId: req.traceId,
    message: 'Internal Server Error',
  });
}