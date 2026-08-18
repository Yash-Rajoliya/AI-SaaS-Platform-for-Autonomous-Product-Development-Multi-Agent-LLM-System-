import logger from '../utils/logger.js';

export default function errorMiddleware(
  err,
  req,
  res,
  next
) {
  logger.error({
    traceId: req.traceId,
    path: req.path,
    method: req.method,
    error: err.stack || err.message || err,
  });

  // Proxy network errors mapping
  if (err.code === 'ECONNREFUSED' || err.code === 'ENOTFOUND') {
    return res.status(502).json({
      success: false,
      traceId: req.traceId,
      message: 'Upstream service unavailable',
    });
  }

  if (err.code === 'ETIMEDOUT' || err.code === 'ECONNABORTED') {
    return res.status(504).json({
      success: false,
      traceId: req.traceId,
      message: 'Upstream request timed out',
    });
  }

  const statusCode = err.statusCode || err.status || 500;
  const isProd = process.env.NODE_ENV === 'production';

  return res.status(statusCode).json({
    success: false,
    traceId: req.traceId,
    message: isProd && statusCode === 500 ? 'Internal Server Error' : err.message || 'An error occurred',
    ...(!isProd && { stack: err.stack }),
  });
}