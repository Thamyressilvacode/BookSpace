var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashboardController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
//salvando a meta
router.post("/salvarMeta", function (req, res) {
    dashController.salvarMeta(req, res);
})

router.post("/atualizarMeta", function (req, res) {
    dashController.atualizarMeta(req, res);
})



module.exports = router;