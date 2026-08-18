import { Router } from 'express';

import {
  listProjects,
} from '../services/agent.proxy.js';

const router = Router();

router.get('/', listProjects);

export default router;