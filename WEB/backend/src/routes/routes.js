const express = require('express');
const Atleta = require('../controllers/atletaController');
const Quests = require('../controllers/questController');

const routes = express.Router();

routes.post("/cadastrarAtleta", Atleta.cadastrarAtleta);
routes.get("/read", Atleta.buscarUsuario)

routes.post("/cadastrarMissoes", Quests.cadastrarMissoes);
routes.get("/readMissoes", Quests.buscarMissoes);

routes.put("/updateExp", Atleta.atualizarPontos);

module.exports = routes;