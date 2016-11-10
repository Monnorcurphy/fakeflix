import { FETCH_MOVIES, receiveMovies, receiveMovie, FETCH_MOVIE, RECEIVE_MOVIE, RATE_MOVIE} from '../actions/movie_actions';
import {receiveErrors} from '../actions/session_actions';
import { fetchMovies, fetchMovie, movieRating} from '../util/movie_api_util';

export default (state) => next => action => {
  const receiveAllMovies = movies => {
    return (state.dispatch(receiveMovies(movies)))
  }
  const receiveAMovie = movie => {
    return (state.dispatch(receiveMovie(movie)))
  }
  const errorCallback = xhr => {
    return (state.dispatch(receiveErrors(xhr.responseJSON)))
  }

  switch(action.type){
    case FETCH_MOVIES:
      fetchMovies(receiveAllMovies, errorCallback);
      return next(action);
    case FETCH_MOVIE:
      fetchMovie(action.id,receiveAMovie, errorCallback);
      return next(action);
    case RATE_MOVIE:

      movieRating({id: Object.keys(state.getState().movies)[0], rating: action.id },receiveAMovie)
      return next(action);
    default:
      return next(action);
  }
};
