export const fetchMovies = (success, error) => {
	$.ajax({
		type: 'get',
		url: `api/movies`,
		success,
		error
	});
};

export const fetchMovie = (id, success, error) => {

	$.ajax({
    type: 'get',
    url: `api/movies/${id}`,
    success,
    error
  });
}

export const movieRating = (movie, success, error) =>{

	$.ajax({
		type: 'patch',
		url:`api/movies/${movie.id}`,
		data: {rating: movie.rating, id: movie.id},
		success,
		error
	})
}
