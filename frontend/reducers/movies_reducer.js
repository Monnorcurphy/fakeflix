import { RECEIVE_ERRORS } from '../actions/session_actions';
import {RECEIVE_MOVIES} from '../actions/movie_actions';
import merge from 'lodash/merge';


const SessionReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_MOVIES:
      return merge({}, state, action.movies);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {errors});
    default:
      return state;
  }
};

export default SessionReducer;
