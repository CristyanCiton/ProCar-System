const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');
const ClienteController = require('./controllers/ClienteController');
const SessaoController = require('./controllers/SessaoController');

const routes = express.Router();

routes.post('/sessao', SessaoController.create);

routes.get('/usuario', UsuarioController.index);
routes.post('/usuario', UsuarioController.create);
routes.delete('/usuario/:idUsuario', UsuarioController.delete);

routes.get('/cliente', ClienteController.index);
routes.post('/cliente', ClienteController.create);
routes.delete('/cliente/:idCliente', ClienteController.delete);

module.exports = routes;