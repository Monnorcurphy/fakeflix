# Schema Information

# Schema Information

## users
column              | data type |	 details
--------------------|-----------|---------------------------
id	                |  integer	| not null, primary key
username	          |  string	  | not null, indexed, unique
password_digest     |	 string	  | not null
session_token	      |  string	  | not null, indexed, unique
favorite_ids 	      |  array	  | not null

<!-- admin               |  boolean  | default: false -->

## movies
column              | data type |	 details
--------------------|-----------|---------------------------
id	                | integer	  | not null, primary key
title	              | string	  | not null, indexed
description         | text      | not null
year	              | integer	  | not null
genre	              | string    | not null
actors              | array     | not null
imdb_id             | integer   | not null
image_name          | string    |
image_type          | string    |
image_size          | integer   |
avg_rating	        | integer	  | default: 0


## genres
column          | data type |	 details
----------------|-----------|---------------------------
id	            | integer	  | not null, primary key
name            | string    | not null, indexed


## ratings
column          | data type |	 details
----------------|-----------|---------------------------
id	            | integer   |	not null, primary key
user_id         | integer   | not null, indexed
rating          | integer   | not null, indexed

 <!-- ## castings (bonus)
column          | data type |	 details
----------------|-----------|---------------------------
id	            | integer   |	not null, primary key
series_id       | integer   | not null, indexed, foreign_key(references castings series table)
cast_id         | integer   | not null, indexed, foreign_key(references castings users table) -->

## actors (bonus)
column          | data type |	 details
----------------|-----------|---------------------------
id	            | integer   |	not null, primary key
name            | string    | not null, indexed
castings_id     | integer   | indexed, foreign_key(references castings join table)
