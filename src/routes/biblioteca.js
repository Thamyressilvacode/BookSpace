var express = require("express");
var router = express.Router();

var bibliotecaController = require("../controllers/bibliotecaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/salvarReview/:idUsuario", function (req, res) {
    bibliotecaController.salvarReview(req, res);
})

router.get("/carregarLivro/:idUsuario", function (req, res) {
    bibliotecaController.carregarLivro(req, res);
})

module.exports = router;