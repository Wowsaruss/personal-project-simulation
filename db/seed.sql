SELECT * FROM users;
select * from houses;

insert into houses
(img, loan, name, description, desiredrent, address, zip, city, state)
values
(
'https://i.pinimg.com/originals/24/cd/f1/24cdf158b74c9698150655782a4ddb12.jpg',
2347.89,
'school bus',
'bus motor home converion',
0,
'Anywhere I Want',
'0',
'home',
'parks'
);

insert into houses
(img, loan, name, description, desiredrent, address, zip, city, state)
values
('https://2.bp.blogspot.com/-IJRYdujk7tU/WSzstqE8GXI/AAAAAAAAXtw/Gzq5eVXPYhojn5EZ4Gtd5_QbwmVem17FgCLcB/s1600/tiny-house-bookstore-5.jpg',
150000,
'Traveling Tiny House Bookstore',
'A traveling tiny house bookstore from France!',
200,
'open road',
'0',
'any town',
'any state'
)

INSERT INTO houses
(img, loan, name, description, desiredRent, address, zip, city, state)
VALUES
('https://i.ytimg.com/vi/6v6RLUb2TQQ/hqdefault.jpg', 10, 'sticky', 'small but clean and comes with a dog', 5, '4545 e. w. drive', 89999, 'pinetop', 'AZ');

CREATE TABLE houses (
    id serial primary key,
    img text,
    loan decimal,
    name text,
    description text,
    desiredRent float,
    address text,
    zip integer,
    city text,
    state text
)


create table favorites (
    id serial primary key,
    userid integer REFERENCES users(id) not null,
    houseid integer references houses(id) not null
);

insert into houses
(img, loan, name, description, desiredrent, address, zip, city, state)
values
('https://vignette.wikia.nocookie.net/fallout/images/9/90/Harpers_shack.jpg/revision/latest?cb=20120831231543', 25.00, 'The Shack', 'Its a shack from fallout', 5.00, '123 fake street', 841444, 'lol', 'Washington')


(
'https://i.pinimg.com/originals/24/cd/f1/24cdf158b74c9698150655782a4ddb12.jpg',
2347.89,
'school bus',
'bus motor home converion',
0,
'Anywhere I Want',
'0',
'home',
'parks'
);

insert into favorites
(userid, houseid)
values
($1, $2)

select *
from favorites
where houseid = $1 and userid;

delete from favorites
where userid = 1;