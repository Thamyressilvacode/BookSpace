var database = require("../database/config")


function btnInserirMeta(meta, idUsuario) { // ← receber aqui
    var instrucaoSql = `
        INSERT INTO meta_leitura(fk_usuario, metaLivros) VALUES(${idUsuario}, ${meta});`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function carregarMeta(idUsuario){
    var instrucaoSql = `
        SELECT metaLivros FROM meta_leitura WHERE fk_usuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function carregarTotalPaginas(idUsuario){
     var instrucaoSql = `
        SELECT SUM(paginas) AS totalPaginas FROM livros WHERE fk_usuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    btnInserirMeta,
    carregarMeta,
    carregarTotalPaginas
};