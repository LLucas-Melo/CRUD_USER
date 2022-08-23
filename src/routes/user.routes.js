const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController')
//=============
//* Rota para listar todos os usuarios
//========
router.get('/',UserController.index);
//=============
//* Rota paramostar formulario de cadastro de usuario
//========
router.get('/create',UserController.createForm)
//=============
//* Rota para cadastrar o usuario 
//========

router.post('/',UserController.create)
module.exports = router;