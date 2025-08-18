-- Active: 1755459514413@@localhost@3306@base_de_dados

SELECT u.id as uid, first_name, bio, ur.role_id, r.name
from users u
left join profiles as p on u.id = p.id
INNER join users_roles as ur on ur.user_id = u.id
INNER join roles as r on r.id = ur.role_id
ORDER BY u.id asc;