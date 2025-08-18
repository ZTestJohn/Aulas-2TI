-- Active: 1755459514413@@localhost@3306@base_de_dados

SELECT first_name, 
count(first_name) as "total", 
max(salary) as "Salario mais alto", 
min(salary) as "Salario mais baixo", 
ROUND(avg(salary), 2) as "Média Salarial",
sum(salary) as "Salario total"
from users as u
GROUP BY first_name
ORDER BY total DESC;

SELECT * from users
WHERE first_name="Carly"