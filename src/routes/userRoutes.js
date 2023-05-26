/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// não deveriam existir
// router.get('/:id', userController.show); // trás usuários por ID
router.get('/', userController.index); // trás usuários

router.post('/', userController.store); // o mesmo que CREATE
router.put('/', loginRequired, userController.update); // pega usuário e muda
router.delete('/', loginRequired, userController.delete); // deleta o usuário

export default router;

/* Geralmente cada controller possui 5 métodos. Padrão de mercado
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um -> PATCH ou PUT

se o seu controller faz mais que isso tudo, provavelmente você precisa de um controller novo */
