import { search} from '../actions/movie_actions';
import {receiveErrors} from '../actions/session_actions';
import { searchMovies} from '../util/movie_api_util';

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
    default:
      return next(action);
  }
};
