import { FETCH_ACTOR, receiveActor, RECEIVE_ACTOR, FETCH_ACTOR_MOVIES, RECEIVE_ACTOR_MOVIES, receiveActorMovies} from '../actions/actor_actions';
import {receiveErrors} from '../actions/session_actions';
import { fetchActor, fetchActorMovies } from '../util/actor_api_util';

export default (state) => next => action => {

  const receiveAnActor = actor => {
    return (state.dispatch(receiveActor(actor)))
  }
  const receiveActorsMovies = movies => {
    return (state.dispatch(receiveActorMovies(movies)))
  }
  const errorCallback = xhr => {
    return (state.dispatch(receiveErrors(xhr.responseJSON)))
  }
  
  switch(action.type){

    case FETCH_ACTOR:
      fetchActor(action.name, receiveAnActor, errorCallback)
      return next(action);

    case RECEIVE_ACTOR:
      fetchActorMovies(action.id.results[0].id, receiveActorsMovies, errorCallback)
      return next(action);

    default:
      return next(action);
  }
};
