-- Active: 1755459514413@@localhost@3306@base_de_dados

INSERT INTO profiles (bio, description, id)
SELECT CONCAT("Bio de ", first_name), CONCAT("Descrição do ", first_name), id
from users;