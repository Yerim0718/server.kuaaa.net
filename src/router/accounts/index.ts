import { Router } from 'express';
import { register, unregister, test } from './accounts';

const router = Router();

router.get('/', test);

router.post('/register', register);
router.post('/unregister', unregister);

export default router;
