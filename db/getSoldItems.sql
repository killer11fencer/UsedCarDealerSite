select type,drive,price,miles,description, status, model_name, year, make from listing
join car_model on car_model.id = listing.model_id
join car_make on car_make.id = listing.car_id
join car_type on car_type.id = listing.model_id
order by listing.id desc
where status = 'sold'
limit 4;