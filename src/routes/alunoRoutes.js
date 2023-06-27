import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

//  No máximo 5 rotas para fazer o CRUD. Mais que isso, faça outro controller
router.get('/', alunoController.index);
router.post('/', loginRequired, alunoController.store);
router.put('/:id', loginRequired, alunoController.update);
router.get('/:id', alunoController.show);
router.delete('/:id', loginRequired, alunoController.delete);
export default router;
