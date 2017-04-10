import { RECEIVE_ERRORS } from '../actions/session_actions';
import {RECEIVE_ACTOR, RECEIVE_ACTOR_MOVIES} from '../actions/actor_actions';
import merge from 'lodash/merge';


const ActorReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ACTOR:
      return merge({}, state, action.actor);
    case RECEIVE_ACTOR_MOVIES:
      return merge({}, state, action.movies.cast);
    default:
      return state;
  }
};

export default ActorReducer;
