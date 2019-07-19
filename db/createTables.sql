create table car_make (
    id serial primary key,
    make varchar
 );

create table car_model (
    id serial primary key,
    make_id integer,
    model_name varchar,
    year integer
);

create table car_type (
    id serial primary key,
    model_id integer,
    type varchar,
    drive varchar
);

create table listing (
    id serial primary key,
    price integer,
    miles integer,
    description text,
    status varchar,
    car_id integer,
    model_id integer
    
   
);

create table email_lead (
    id serial primary key,
    user_id integer,
    price_range  integer[],
    year_range integer[],
    listing_id integer

);

create table users (
    id serial primary key,
    first_name varchar,
    last_name varchar,
    phone text,
    admin boolean
);

create table user_login (
    id serial primary key,
    email varchar,
    password text,
    user_id integer
);

create table photos (
    id serial primary key,
    image_url text,
    listing_id integer
);

-- Drop tables
drop table photos;
drop table user_login;
drop table users;
drop table email_lead;
drop table listing;
drop table car_type;
drop table car_model;
drop table car_make;
-- inserting data for database

insert into car_make (make)
values
('Toyota'),
('Mercedes Benz'),
('BMW'),
('Honda'),
('Hyundia')

-- Toyota Models
insert into car_model (make_id,model_name)
values 
(1,'Corolla'),
(1,'Camry'),
(1,'Sienna'),
(1,'Avalon'),
(1,'Highlander'),
(1,'Prius'),
(1,'Yaris'),
(1,'Tacoma'),
(1,'Tundra'),
(1,'4Runner'),
(1,'RAV4')

--Mercedes Models
insert into car_model (make_id,model_name)
values 
(2,'C230'),
(2,'E350'),
(2,'E500'),
(2,'E55'),
(2,'S430'),
(2,'S550'),
(2,'S600'),
(2,'GL350'),
(2,'GL450'),
(2,'GL550'),
(2,'ML350')