import client from 'prom-client';

const requestCounter =
  new client.Counter({
    name: 'http_requests_total',
    help: 'Total Requests',
    labelNames: ['method', 'route'],
  });

export default function metricsMiddleware(
  req,
  _res,
  next,
) {
  requestCounter.inc({
    method: req.method,
    route: req.path,
  });

  next();
}