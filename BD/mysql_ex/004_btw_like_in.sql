-- Active: 1755459514413@@localhost@3306@base_de_dados

SHOW TABLES;

DESCRIBE users;
DESCRIBE profiles;
DESCRIBE roles;
DESCRIBE users_roles;

SELECT * FROM users WHERE created_at >= "2020-06-12 14:52:39" AND created_at <= "2020-10-04 03:36:24";
SELECT * FROM users WHERE created_at BETWEEN "2020-06-12 14:52:39" AND "2020-10-04 03:36:24";
SELECT * from users where id in (70, 60, 90);
SELECT * FROM users WHERE first_name LIKE "j%";
