import { FETCH_MOVIES, receiveMovies, receiveMovie, FETCH_MOVIE, RECEIVE_MOVIE} from '../actions/movie_actions';
import { fetchMovies, fetchMovie} from '../util/movie_api_util';

export default  (state) => next => action => {
  const receiveAllMovies = movies => state.dispatch(receiveMovies(movies));
  const receiveAMovie = movie => state.dispatch(receiveMovie(movie));
  const errorCallback = xhr => state.dispatch(receiveErrors(xhr.responseJSON));

  switch(action.type){
    case FETCH_MOVIES:
      fetchMovies(receiveAllMovies, errorCallback);
    case FETCH_MOVIE:
      fetchMovie(action.id,receiveAMovie, errorCallback);
    default:
      return next(action);
  }
};
