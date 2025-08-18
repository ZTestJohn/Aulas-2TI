-- Active: 1755459514413@@localhost@3306@base_de_dados

SELECT u.id, u.first_name, p.description 
FROM users as u
left JOIN profiles as p 
on u.id = p.id;