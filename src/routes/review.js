var express = require("express");
var router = express.Router();

var reviewController = require("../controllers/reviewController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/salvarReview", function (req, res) {
    reviewController.salvarReview(req, res);
})


module.exports = router;