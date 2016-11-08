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

export const searchMovies = (id, success, error) => {
	$.ajax({
		type: 'get',
		url: `api/movies/${id}`,
		success,
		error
	})
}
