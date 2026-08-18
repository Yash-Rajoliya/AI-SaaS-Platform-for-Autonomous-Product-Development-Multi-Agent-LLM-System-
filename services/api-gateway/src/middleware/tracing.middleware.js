import { v4 as uuid } from 'uuid';

export default function tracingMiddleware(
  req,
  res,
  next,
) {
  const traceId = uuid();

  req.traceId = traceId;

  res.setHeader(
    'x-trace-id',
    traceId,
  );

  next();
}