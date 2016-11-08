import {RECEIVE_MOVIES} from '../actions/movie_actions';
import merge from 'lodash/merge';


const SearchReducer = (state = {}, action) => {

  switch(action.type) {
    case RECEIVE_MOVIES:
      return merge({}, state, action.movies);
    default:
      return state;
  }
};

export default SearchReducer;
