import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import MoviesReducer from './movies_reducer';
import SearchReducer from './search_reducer';
import ActorReducer from './actor_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  movies: MoviesReducer,
  searchResults: SearchReducer,
  actor: ActorReducer
});

export default RootReducer;
