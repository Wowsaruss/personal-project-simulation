select * from favorites
join houses on houses.id = favorites.houseid
where userid = $1;