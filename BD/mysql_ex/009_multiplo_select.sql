-- Active: 1755459514413@@localhost@3306@base_de_dados

SELECT u.id as uid, p.id as pid, u.first_name FROM users as u, profiles as p WHERE u.id = p.id;