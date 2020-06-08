const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');
const ClienteController = require('./controllers/ClienteController');
const SessaoController = require('./controllers/SessaoController');
const PagarController = require('./controllers/PagarController');

const routes = express.Router();

routes.get('/pagar', PagarController.index);
routes.post('/pagar', PagarController.create);
routes.post('/pagar/:idFinanceiro', PagarController.update);

routes.post('/sessao', SessaoController.create);

routes.get('/usuario', UsuarioController.index);
routes.post('/usuario', UsuarioController.create);
routes.delete('/usuario/:idUsuario', UsuarioController.delete);

routes.get('/cliente', ClienteController.index);
routes.post('/cliente', ClienteController.create);
routes.post('/cliente/:idCliente', ClienteController.update);
routes.delete('/cliente/:idCliente', ClienteController.delete);

module.exports = routes;