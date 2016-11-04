import { RECEIVE_ERRORS } from '../actions/session_actions';
import {RECEIVE_MOVIES, RECEIVE_MOVIE} from '../actions/movie_actions';
import merge from 'lodash/merge';


const SessionReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_MOVIES:
      return merge({}, state, action.movies);
    case RECEIVE_MOVIE:
      return merge({}, state, {[action.movie.id]: action.movie})
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {errors});
    default:
      return state;
  }
};

export default SessionReducer;
