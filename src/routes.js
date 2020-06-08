const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');
const ClienteController = require('./controllers/ClienteController');
const SessaoController = require('./controllers/SessaoController');
const Lancamento_finanController = require('./controllers/Lancamento_finanController');
const Baixa_finanController = require('./controllers/Baixa_finanController');

const routes = express.Router();

routes.get('/baixa', Baixa_finanController.index);
routes.post('/baixa/:idFinanceiro', Baixa_finanController.update);

routes.get('/lancamento', Lancamento_finanController.index);
routes.post('/lancamento', Lancamento_finanController.create);
routes.post('/lancamento/:idFinanceiro', Lancamento_finanController.update);

routes.post('/sessao', SessaoController.create);

routes.get('/usuario', UsuarioController.index);
routes.post('/usuario', UsuarioController.create);
routes.delete('/usuario/:idUsuario', UsuarioController.delete);

routes.get('/cliente', ClienteController.index);
routes.post('/cliente', ClienteController.create);
routes.post('/cliente/:idCliente', ClienteController.update);
routes.delete('/cliente/:idCliente', ClienteController.delete);

module.exports = routes;