var database = require("../database/config")

function carregarReview(idLivro){
    var instrucaoSql = `
    SELECT titulo,review,nota FROM livros WHERE idLivros = ${idLivro};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    carregarReview  
};