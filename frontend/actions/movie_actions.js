export const FETCH_MOVIES = "FETCH_MOVIES";
export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const FETCH_MOVIE = 'FETCH_MOVIE'
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";
export const FETCH_PLAY = 'FETCH_PLAY'


export const fetchMovies = () =>({
  type: FETCH_MOVIES
});

export const fetchMovie = id => ({
  type: FETCH_MOVIE,
  id
});

export const receiveMovies = movies => ({
  type: RECEIVE_MOVIES,
  movies
});

export const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  movie
})

export const fetchPlay = movie => ({
  type: FETCH_PLAY,
  movie
})
