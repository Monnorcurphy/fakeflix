import { FETCH_MOVIES, receiveMovies, receiveMovie, FETCH_MOVIE, RECEIVE_MOVIE, FETCH_PLAY, fetchPlay} from '../actions/movie_actions';
import {receiveErrors} from '../actions/session_actions';
import { fetchMovies, fetchMovie} from '../util/movie_api_util';

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
    case FETCH_PLAY:
      fetchPlay(action.movie, receiveMovie, errorCallback)
      return next(action);
    default:
      return next(action);
  }
};
