export const fetchTrailer = (trailer, success, error) =>
  $.ajax({
  type: 'get',
  url: `https://www.googleapis.com/youtube/v3/search?part=Snippet&maxResults=1&order=relevance&q=` +trailer + `+trailer&key=AIzaSyDSRJvulcZB4E5ktfl2HzEXJWe71XnUDu0`,
  success,
  error
});
