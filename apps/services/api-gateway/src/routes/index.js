import { Router } from 'express';

import authRoutes from './auth.routes.js';
import projectRoutes from './project.routes.js';
import executionRoutes from './execution.routes.js';
import observabilityRoutes from './observability.routes.js';

const router = Router();

router.use('/auth', authRoutes);

router.use('/projects', projectRoutes);

router.use('/executions', executionRoutes);

router.use(
  '/observability',
  observabilityRoutes,
);

export default router;