var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/btnInserirMeta/:idUsuario", function (req, res) {
    dashbordController.btnInserirMeta(req, res);
})

router.get("/carregarMeta/:idUsuario", function (req, res) {
    dashboardController.carregarMeta(req, res);
});

router.get("/carregarTotalPaginas/:idUsuario", function (req, res) {
    dashboardController.carregarTotalPaginas(req, res);
});

module.exports = router;