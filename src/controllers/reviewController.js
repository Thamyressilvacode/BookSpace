var reviewModel = require("../models/reviewModel");

function carregarReview(req, res){
    var idLivro = req.params.idLivro;

    reviewModel.carregarReview(idLivro)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}




module.exports = {
    carregarReview
}