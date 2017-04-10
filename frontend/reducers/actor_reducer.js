import { RECEIVE_ERRORS } from '../actions/session_actions';
import {RECEIVE_ACTOR} from '../actions/actor_actions';
import merge from 'lodash/merge';


const ActorReducer = (state = {}, action) => {
  console.log(action);
  switch(action.type) {
    case RECEIVE_ACTOR:
      return merge({}, state, action.actor);
    default:
      return state;
  }
};

export default ActorReducer;
