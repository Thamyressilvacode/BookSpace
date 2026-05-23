var express = require("express");
var router = express.Router();

var reviewController = require("../controllers/reviewController");

router.get("/carregarReview/:idLivro", function (req, res) {
    reviewController.carregarReview(req, res);
})



module.exports = router;