var database = require("../database/config")


// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function salvarReview(idUsuario,titulo,autor,genero,paginas,nota,review) {
    //console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
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