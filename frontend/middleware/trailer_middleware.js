import { FETCH_TRAILER, receiveTrailer, RECEIVE_TRAILER} from '../actions/trailer_actions';
import {receiveErrors} from '../actions/session_actions';
import { fetchTrailer} from '../util/trailer_api_util';

export default (state) => next => action => {

  const receiveATrailer = trailer => {
    return (state.dispatch(receiveTrailer(trailer)))
  }
  const errorCallback = xhr => {
    return (state.dispatch(receiveErrors(xhr.responseJSON)))
  }
  
  switch(action.type){

    case FETCH_TRAILER:
      fetchTrailer(action.name, receiveATrailer, errorCallback)
      return next(action);


    default:
      return next(action);
  }
};
