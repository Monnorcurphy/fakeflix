import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import MoviesReducer from './movies_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  movies: MoviesReducer,
  searchResults: SearchReducer
});

export default RootReducer;
