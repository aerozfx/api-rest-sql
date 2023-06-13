CREATE TABLE entries 
(
  id_entry serial PRIMARY KEY NOT NULL,
  title VARCHAR(100) NOT NULL,
  content text NOT NULL,
  date date DEFAULT CURRENT_DATE,
  id_author int,
  category VARCHAR(15),
	FOREIGN KEY (id_author) REFERENCES authors (id_author) ON DELETE CASCADE
)

SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
FROM entries e
  JOIN authors a
  ON e.id_author=a.id_author
WHERE a.email=$1
ORDER BY e.title;

SELECT e.title, e.content, e.date, e.category, a.name, a.surname, a.image 
  FROM entries e
  JOIN authors a ON e.id_author = a.id_author;

INSERT INTO entries(title,content,id_author,category) 
  VALUES ($1,$2,
  (SELECT id_author FROM authors WHERE email=$3),$4);

UPDATE entries
SET title = $1, content = $2, date = NOW(), category= $3
WHERE title = $4

DELETE
FROM entries
WHERE title = $1

DROP TABLE entries