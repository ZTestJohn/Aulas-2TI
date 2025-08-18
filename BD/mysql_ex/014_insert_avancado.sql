-- Active: 1755459514413@@localhost@3306@base_de_dados

insert into roles (name) 
VALUES 
("POST"), 
("PUT"), 
("DELETE"), 
("GET");

SELECT * from roles;

INSERT into users_roles (user_id, role_id)
SELECT id, 
(SELECT id from roles ORDER BY rand() LIMIT 1) 
from users;

INSERT ignore into users_roles (user_id, role_id)
SELECT id, 
(SELECT id from roles ORDER BY rand() LIMIT 1) 
from users ORDER BY RAND() limit 40;
-- Usuarios com mais de uma permissao, ignorando erros.