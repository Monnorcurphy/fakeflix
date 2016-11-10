import { RECEIVE_ERRORS } from '../actions/session_actions';
import {RECEIVE_MOVIES, RECEIVE_MOVIE} from '../actions/movie_actions';
import merge from 'lodash/merge';


const MovieReducer = (state = {}, action) => {

  switch(action.type) {
    case RECEIVE_MOVIES:
      return merge({}, state, action.movies);
    case RECEIVE_MOVIE:
      return merge({}, state, {[action.movie.id]: action.movie});
    default:
      return state;
  }
};

export default MovieReducer;
