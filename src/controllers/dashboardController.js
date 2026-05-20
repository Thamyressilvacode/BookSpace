var dashModel = require("../models/dashboardModel");

function salvarMeta(req, res) {
    var meta = req.body.metaServer;
    


    // Validações básicas
    if (meta == undefined || meta == "") {
        return res.status(400).send("Sua meta está inválida!");
    } 
    
    dashboardModel.salvarMeta(meta)
        .then(function (resultado) {
            res.status(201).json({
                mensagem: "meta cadastrada com sucesso!",
                resultado: resultado
            });
        })
        .catch(function (erro) {
            console.log(erro);

            // Tratamento de erro de review duplicado
            if (erro.code == "ER_DUP_ENTRY") {
                return res.status(400).send("Esta meta já está cadastrada!");
            }

            res.status(500).json(erro.sqlMessage);
        });
}

function atualizarMeta(req, res) {
    var meta = req.body.metaServer;


    // Validações básicas
    if (meta == undefined || meta == "") {
        return res.status(400).send("Sua meta está inválida!");
    } 
    
    dashboardModel.atualizarMeta(meta)
        .then(function (resultado) {
            res.status(201).json({
                mensagem: "meta atualizada com sucesso!",
                resultado: resultado
            });
        })
        .catch(function (erro) {
            console.log(erro);

            // Tratamento de erro de review duplicado
            if (erro.code == "ER_DUP_ENTRY") {
                return res.status(400).send("Esta meta já está cadastrada!");
            }

            res.status(500).json(erro.sqlMessage);
        });
}




module.exports = {
    salvarMeta,
    atualizarMeta
}