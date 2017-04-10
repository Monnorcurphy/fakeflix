import { RECEIVE_ERRORS } from '../actions/session_actions';
import {RECEIVE_TRAILER} from '../actions/trailer_actions';
import merge from 'lodash/merge';


const TrailerReducer = (state = {}, action) => {

  switch(action.type) {
    case RECEIVE_TRAILER:
      
      return merge({}, state, action.results);

    default:
      return state;
  }
};

export default TrailerReducer;
