###Exercício 01
a) Retira a coluna salary da tabela
b) Altera a nomenclatura da coluna gender para sex
c) Altera a tipagem do valor que irá ser armazenado
d) ``
	ALTER TABLE Actor
	CHANGE gender gender VARCHAR(100);
``
###Exercício 02
a) ``
	UPDATE Actor
	SET nome= "Pedro Torres"
WHERE id = "003";
``
b) `` 	
	UPDATE Actor
	SET nome= "JULIANA PAES"
WHERE id= "005";

	UPDATE Actor
	SET nome= "Juliana Paes"
	WHERE id= "005";
``
d) Error Code: 1054. Unknown column 'idade' in 'field list', a coluna não existe na tabela salva.
###Exercício 03
a) ``
	DELETE FROM Actor 
	WHERE nome = "Fernanda Montenegro";
``
b) ``
	DELETE FROM Actor
	WHERE ( gender LIKE "male") AND salary > 100000; 	//alterei o valor para realidade da minha tabela
``
###Exercício 04
a)`` 
	SELECT MAX(salary) FROM Actor;
``
b) ``
	SELECT MIN(salary) FROM Actor;
``
c) `` 
	SELECT COUNT(*) FROM Actor WHERE gender = "female";
``
d) ``
	SELECT SUM(salary) 
	FROM Actor;
``

###Exercício 05
a) Ele fez a conta de quantos generos tinha e agrupou, no meu caso só tinha female, então só foram agrupados os females.
b)`` 
	SELECT nome, id FROM Actor
	ORDER BY nome DESC;
``
c) ``
	SELECT * FROM Actor
	ORDER BY salary ASC;
``
d) `` 
	SELECT nome FROM Actor
	ORDER BY salary DESC
	LIMIT 3;
``
e) ``
	SELECT AVG(salary), gender
	FROM Actor
	GROUP BY gender;
``
###Exercício 06
a) ``
	ALTER TABLE Movie
	ADD playing_limit_date DATE;
``
b) ``
	ALTER TABLE Movie
	CHANGE avaliacao avaliacao FLOAT;
``
c) ``
	UPDATE Movie
	SET playing_limit_date = "2022/02/21"
	WHERE id= "001";

	UPDATE Movie
	SET playing_limit_date = "2022/01/21"
	WHERE id= "002";
``
d) Não apresenta erro, porém nenhuma linha é afetada.
