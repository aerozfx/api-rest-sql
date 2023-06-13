CREATE TABLE authors
(id_author serial NOT NULL PRIMARY KEY,
name VARCHAR(30) NOT NULL,
surname VARCHAR(50) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
image VARCHAR(255))


SELECT *
FROM authors;

SELECT *
FROM authors
WHERE email = $1;

INSERT INTO authors(name, surname, email, image)
VALUES($1, $2, $3, $4);

UPDATE authors
SET name = $1, surname = $2, email = $3, image = $4
WHERE email = $5;

DELETE 
FROM authors 
WHERE email = $1;

DROP TABLE authors;