-- Active: 1755459514413@@localhost@3306@base_de_dados

UPDATE users set salary = ROUND(rand() * 10000, 2);

SELECT salary from users;