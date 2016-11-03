export const fetchMovies = (success, error) => {
	$.ajax({
		method: 'Get',
		url: `api/movies`,
		success,
		error
	});
};
