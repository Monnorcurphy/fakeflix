import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import MoviesReducer from './movies_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  movies: MoviesReducer
});

export default RootReducer;
