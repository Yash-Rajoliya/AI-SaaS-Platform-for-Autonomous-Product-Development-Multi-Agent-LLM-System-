import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';

import routes from './routes/index.js';

import rateLimiter from './config/rate-limit.js';

import loggingMiddleware from './middleware/logging.middleware.js';
import metricsMiddleware from './middleware/metrics.middleware.js';
import tracingMiddleware from './middleware/tracing.middleware.js';
import errorMiddleware from './middleware/error.middleware.js';

const app = express();

app.use(helmet());

app.use(cors());

app.use(compression());

app.use(express.json({ limit: '5mb' }));

app.use(rateLimiter);

app.use(tracingMiddleware);

app.use(metricsMiddleware);

app.use(loggingMiddleware);

app.use('/api/v1', routes);

app.use(errorMiddleware);

export default app;