const _defaultSuccess = data => console.log(data);

export const fetchActor = (actor, success, error) =>
	$.ajax({
		type: 'get',
		url: `http://api.tmdb.org/3/search/person?api_key=ddb0be799ce01cc0b22e6a5045353585&query=tom%20hanks`,
		success,
		error
	});
