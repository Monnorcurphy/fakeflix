

export const fetchActor = (actor, success, error) =>

	$.ajax({
		type: 'get',
		url: `http://api.tmdb.org/3/search/person?api_key=ddb0be799ce01cc0b22e6a5045353585&query=`+actor,
		success,
		error
	});

export const fetchActorMovies = (id, success, error) =>
	$.ajax({
		type: 'get',
		url: `https://api.themoviedb.org/3/person/` + id + `/combined_credits?api_key=ddb0be799ce01cc0b22e6a5045353585&language=en-US`,
		success,
		error
	});
