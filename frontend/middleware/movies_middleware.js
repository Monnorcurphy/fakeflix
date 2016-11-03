import { fetchMovies, FETCH_MOVIES} from '../actions/movie_actions';

export default ({getState, dispatch}) => next => action => {
  const receiveMovies = movies => dispatch(receiveMovies(movie));
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));

  switch(action.type){
    case FETCH_MOVIES:
      fetchMovies(recieveMovies, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
