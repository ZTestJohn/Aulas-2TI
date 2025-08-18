-- Active: 1755459514413@@localhost@3306@base_de_dados

SELECT id, first_name, last_name, email
from users
WHERE id > 90
ORDER BY first_name;