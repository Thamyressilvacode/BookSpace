var database = require("../database/config")


function salvarReview(idUsuario,titulo,autor,genero,paginas,nota,review) {
    var instrucaoSql = `
        INSERT INTO livros(fk_usuario,titulo,autor,genero,paginas,nota,review) VALUES
        (${idUsuario},"${titulo}","${autor}", "${genero}",${paginas}, ${nota},"${review}");
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function carregarLivro(idUsuario){
    var instrucaoSql = `
    SELECT idLivros,fk_usuario, titulo,nota FROM livros WHERE fk_usuario = ${idUsuario};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarReview,
    carregarLivro
};