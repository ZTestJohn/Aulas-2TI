-- Active: 1755459514413@@localhost@3306@base_de_dados

SELECT id, first_name, last_name, email
from users
WHERE id > 90
ORDER BY first_name
LIMIT 5;

SELECT id, first_name, last_name, email
from users
WHERE id > 90
ORDER BY id
LIMIT 10 OFFSET 3;
SELECT id, first_name, last_name, email
from users
WHERE id > 90
ORDER BY id
LIMIT 3,10;

