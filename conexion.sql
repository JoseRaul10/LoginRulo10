drop database if exists conexion;
create database if not exists conexion;
use conexion;
create table if not exists usuario(
usuario varchar(30) not null,
pass varchar(13)not null,
correo varchar(50) not null)
engine=InnoDB;
desc usuario;

insert into usuario value("Raul","1234","raul@gmail.com");
select * from usuario;