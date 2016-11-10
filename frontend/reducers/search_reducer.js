import {SEARCH} from '../actions/search_actions';
import merge from 'lodash/merge';


const SearchReducer = (state = '', action) => {

  switch(action.type) {
    case SEARCH:
      return action.filter;
    default:
      return state;
  }
};

export default SearchReducer;
