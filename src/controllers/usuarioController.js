var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Validações
    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(function (resultado) {

                if (resultado.length == 1) {
                    // Usuário encontrado
                    res.json({
                        idusuario: resultado[0].idusuario,
                        nome: resultado[0].nome,
                        email: resultado[0].email
                    });
                } else if (resultado.length == 0) {
                    // Usuário não encontrado
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    // Mais de um resultado (erro)
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }

            }).catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });

    }
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Validações básicas
    if (nome == undefined || nome == "") {
        return res.status(400).send("Seu nome está inválido!");
    } 
    
    if (email == undefined || email == "") {
        return res.status(400).send("Seu email está inválido!");
    } 
    
    if (senha == undefined || senha == "") {
        return res.status(400).send("Sua senha está inválida!");
    }

    // Validação simples de tamanho (opcional, mas recomendado)
    if (senha.length < 4) {
        return res.status(400).send("A senha deve ter pelo menos 4 caracteres!");
    }

    usuarioModel.cadastrar(nome, email, senha)
        .then(function (resultado) {
            res.status(201).json({
                mensagem: "Usuário cadastrado com sucesso!",
                resultado: resultado
            });
        })
        .catch(function (erro) {
            console.log(erro);

            // Tratamento de erro de email duplicado
            if (erro.code == "ER_DUP_ENTRY") {
                return res.status(400).send("Este email já está cadastrado!");
            }

            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    autenticar,
    cadastrar
}