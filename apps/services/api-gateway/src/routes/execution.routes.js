import { Router } from 'express';

import {
  startExecution,
} from '../services/execution.proxy.js';

const router = Router();

router.post('/', startExecution);

export default router;