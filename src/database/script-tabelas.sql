-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

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
    autor VARCHAR(100) NOT NULL,
    genero VARCHAR(45) NOT NULL,
    metaLivros INT NOT NULL,
    paginasLidas INT NOT NULL,
    nota INT CHECK(nota BETWEEN 0 AND 10),
    review VHARCHAR(700)
);

SELECT * FROM usuario;


CREATE USER 'bookspace'@'localhost' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON *.* TO 'bookspace'@'localhost';
FLUSH PRIVILEGES;