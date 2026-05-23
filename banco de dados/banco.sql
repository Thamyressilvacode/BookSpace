CREATE DATABASE IF NOT EXISTS BookSpace;
USE BookSpace;

CREATE TABLE usuario (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(20) NOT NULL
);

CREATE TABLE meta_leitura (
    idMeta INT AUTO_INCREMENT PRIMARY KEY,
    fk_usuario INT NOT NULL,
    metaLivros INT NOT NULL,
    
    FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE livros (
    idLivros INT AUTO_INCREMENT PRIMARY KEY,
    fk_usuario INT NOT NULL,
    titulo VARCHAR(150) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    genero VARCHAR(50),
    paginas INT DEFAULT 0,
    nota INT CHECK (nota BETWEEN 0 AND 10),
    review VARCHAR(700),
    dataCadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);
INSERT INTO usuario VALUES
(1,'Thamyres','thamyres@gmail.com','44396851Th');

INSERT INTO livros(fk_usuario,titulo,autor,genero,paginas,nota,review) VALUES
(1,'Harry Potter e o prizioneiro as askaban','JK Rolling', 'Fantasia',150,9,'prizioneiro de azkaban');

INSERT INTO meta_leitura(fk_usuario,metaLivros) VALUES
(1,50);

CREATE USER IF NOT EXISTS 'bookspace'@'localhost' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON BookSpace.* TO 'bookspace'@'localhost';
FLUSH PRIVILEGES;

-- testes


SELECT * FROM usuario;
SELECT * FROM meta_leitura;
SELECT * FROM livros;	

SELECT SUM(paginas) FROM livros;

SELECT idLivros,fk_usuario, titulo,nota FROM livros WHERE fk_usuario = 1; 
UPDATE livros SET titulo = '	Harry Potter e o Prisioneiro de Azkaban'  WHERE idLivros = 1; 
 
	

SELECT titulo,review,nota FROM livros WHERE idLivros = 1;

DELETE FROM meta_leitura WHERE idMeta = 3;

DROP TABLE meta_leitura;
