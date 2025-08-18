-- Active: 1755459514413@@localhost@3306@base_de_dados

SELECT u.first_name, p.bio, r.name 
from users as u
INNER join profiles p on p.id = u.id
INNER join users_roles ur on ur.user_id = u.id
INNER join roles as r on ur.role_id = r.id
where u.first_name = "Katelyn"; 

update users as u
INNER join profiles p on p.id = u.id
INNER join users_roles ur on ur.user_id = u.id
INNER join roles as r on ur.role_id = r.id
set p.bio = CONCAT("Atualizado ", u.first_name, ". ", r.name)
where u.first_name = "Katelyn";