var reviewModel = require("../models/reviewModel");

function salvarReview(req, res) {
    var titulo = req.body.tituloServer;
    var review = req.body.reviewServer;
    var autor = req.body.autorServer;
    var genero = req.body.generoServer;
    var nota = req.body.notaServer;


    // Validações básicas
    if (titulo == undefined || titulo == "") {
        return res.status(400).send("Seu titulo está inválido!");
    } 
    
    if (review == undefined || review == "") {
        return res.status(400).send("Sua review está inválido!");
    } 
    
    if (autor == undefined || autor == "") {
        return res.status(400).send("Seu autor está inválida!");
    }


    reviewModel.salvarReview(titulo, review, autor,genero,nota)
        .then(function (resultado) {
            res.status(201).json({
                mensagem: "review cadastrado com sucesso!",
                resultado: resultado
            });
        })
        .catch(function (erro) {
            console.log(erro);

            // Tratamento de erro de review duplicado
            if (erro.code == "ER_DUP_ENTRY") {
                return res.status(400).send("Este review já está cadastrado!");
            }

            res.status(500).json(erro.sqlMessage);
        });
}




module.exports = {
    salvarReview
}