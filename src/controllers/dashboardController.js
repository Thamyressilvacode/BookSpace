var dashboardModel = require("../models/dashboardModel");

function btnInserirMeta(req, res) {
    var meta = req.body.metaServer;
    var idUsuario = req.params.idUsuario;

    // Validações básicas
    if (meta == undefined || meta == "") {
        return res.status(400).send("Sua meta está inválida!");
    } 

    dashboardModel.btnInserirMeta(meta, idUsuario)
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
                return res.status(400).send("Este meta já está cadastrada!");
            }

            res.status(500).json(erro.sqlMessage);
        });
}

function carregarMeta(req, res){
    var idUsuario = req.params.idUsuario;

    dashboardModel.carregarMeta(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function carregarTotalPaginas(req, res){
    var idUsuario = req.params.idUsuario;

    dashboardModel.carregarTotalPaginas(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function carregarDadosGrafico(req, res){
    var idUsuario = req.params.idUsuario;

    dashboardModel.carregarDadosGrafico(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function carregarGeneros(req, res){
    var idUsuario = req.params.idUsuario;

    dashboardModel.carregarGeneros(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function carregarLivrosPorMes(req, res){
    var idUsuario = req.params.idUsuario;

    dashboardModel.carregarLivrosPorMes(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}
module.exports = {
    btnInserirMeta,
    carregarMeta,
    carregarTotalPaginas,
    carregarDadosGrafico,
    carregarGeneros,
    carregarLivrosPorMes
}