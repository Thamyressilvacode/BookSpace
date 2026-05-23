var database = require("../database/config")


// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function salvarMeta(meta) {
    
    var instrucaoSql = `
        INSERT INTO livros(metaLivros) VALUES
        (${meta});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarMeta(meta) {
    
    var instrucaoSql = `
        UPDATE livros SET metaLivros = ${meta};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarMeta,
    atualizarMeta
};