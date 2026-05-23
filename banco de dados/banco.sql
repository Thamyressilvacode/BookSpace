CREATE DATABASE IF NOT EXISTS BookSpace;
USE BookSpace;

-- ====================== TABELA DE USUÁRIOS ======================
CREATE TABLE usuario (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,        -- aumentado + hash depois
    dataCadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ====================== META DE LEITURA ANUAL ======================
CREATE TABLE meta_leitura (
    idMeta INT AUTO_INCREMENT PRIMARY KEY,
    fk_usuario INT NOT NULL,
    metaLivros INT NOT NULL,           -- exemplo: 52 livros por ano
    ano INT NOT NULL,
    dataCadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE KEY uk_usuario_ano (fk_usuario, ano),   -- apenas 1 meta por ano
    FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario) ON DELETE CASCADE
);

-- ====================== TABELA DE LIVROS / LEITURA ======================
CREATE TABLE livros (
    idLivros INT AUTO_INCREMENT PRIMARY KEY,
    fk_usuario INT NOT NULL,
    titulo VARCHAR(150) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    genero VARCHAR(50),
    paginasTotal INT,
    paginasLidas INT DEFAULT 0,
    nota INT CHECK (nota BETWEEN 0 AND 10),
    review VARCHAR(700),
    dataCadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    dataConclusao DATE NULL,
    
    FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario) ON DELETE CASCADE
);

-- ====================== USUÁRIO DO BANCO ======================
CREATE USER IF NOT EXISTS 'bookspace'@'localhost' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON BookSpace.* TO 'bookspace'@'localhost';
FLUSH PRIVILEGES;

-- ====================== TESTES ======================
SELECT * FROM usuario;
SELECT * FROM meta_leitura;
SELECT * FROM livros;