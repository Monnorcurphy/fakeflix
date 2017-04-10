import { FETCH_ACTOR, receiveActor, RECEIVE_ACTOR} from '../actions/actor_actions';
import {receiveErrors} from '../actions/session_actions';
import { fetchActor} from '../util/actor_api_util';

export default (state) => next => action => {

  const receiveAnActor = actor => {
    return (state.dispatch(receiveActor(actor)))
  }
  const errorCallback = xhr => {
    return (state.dispatch(receiveErrors(xhr.responseJSON)))
  }

  switch(action.type){
    case FETCH_ACTOR:
      fetchActor(action.id, receiveAnActor, errorCallback)
      return next(action)
    default:
      return next(action);
  }
};
