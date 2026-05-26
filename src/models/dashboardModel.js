var database = require("../database/config")


function btnInserirMeta(meta, idUsuario) {
    var instrucaoSql = `
        INSERT INTO meta_leitura (fk_usuario, metaLivros) 
        VALUES (${idUsuario}, ${meta})
        ON DUPLICATE KEY UPDATE metaLivros = ${meta};
    `;
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
    SELECT IFNULL(SUM(paginas), 0) AS totalPaginas FROM livros WHERE fk_usuario = ${idUsuario};    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function carregarDadosGrafico(idUsuario){
    var instrucaoSql = `
        SELECT 
            COUNT(idLivros) AS livrosLidos,
            IFNULL((SELECT metaLivros FROM meta_leitura WHERE fk_usuario = ${idUsuario}), 0) AS metaLivros
        FROM livros 
        WHERE fk_usuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function carregarGeneros(idUsuario){
    var instrucaoSql = `
        SELECT genero, COUNT(*) AS quantidade 
        FROM livros 
        WHERE fk_usuario = ${idUsuario}
        GROUP BY genero;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function carregarLivrosPorMes(idUsuario){
    var instrucaoSql = `
        SELECT MONTH(dataCadastro) AS mes, COUNT(*) AS quantidade 
        FROM livros 
        WHERE fk_usuario = ${idUsuario}
        GROUP BY MONTH(dataCadastro)
        ORDER BY mes;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    btnInserirMeta,
    carregarMeta,
    carregarTotalPaginas,
    carregarDadosGrafico,
    carregarGeneros,
    carregarLivrosPorMes
};