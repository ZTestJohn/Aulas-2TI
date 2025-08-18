-- Active: 1755459514413@@localhost@3306@base_de_dados

SELECT u.id as uid, p.id as pid, u.first_name FROM users as u, profiles as p WHERE u.id = p.id;
-- Antigo
DELETE FROM profiles WHERE id BETWEEN 21 and 30;

SELECT u.id, u.first_name, p.description 
FROM users as u
left JOIN profiles as p on u.id = p.id
WHERE p.id BETWEEN 30 and 40 
and first_name LIKE("%a");