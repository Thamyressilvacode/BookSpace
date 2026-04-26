CREATE DATABASE BookSpace;
USE BookSpace;

CREATE TABLE usuario (
    idusuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(20) NOT NULL
);

CREATE TABLE livros (
    idLivros INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    autor VARCHAR(100),
    editora VARCHAR(100),
    genero VARCHAR(45) NOT NULL
);

CREATE TABLE reviews (
    idreviews INT AUTO_INCREMENT PRIMARY KEY,
    nota INT CHECK (nota BETWEEN 0 AND 10),
    comentario TEXT,
    fkUsuario INT,
    fkLivro INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idusuario),
    FOREIGN KEY (fkLivro) REFERENCES livros(idLivros)
);

CREATE USER 'bookspace'@'localhost' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON *.* TO 'bookspace'@'localhost';
FLUSH PRIVILEGES;