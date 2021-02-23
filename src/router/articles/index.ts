import { Router } from 'express';
import { test, getArticleList } from './articles';

const router = Router();

router.get('/', test);
router.get('/:page', getArticleList);

export default router;
