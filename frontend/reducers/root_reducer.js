import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import MoviesReducer from './movies_reducer';
import SearchReducer from './search_reducer';
import ActorReducer from './actor_reducer';
import TrailerReducer from './trailer_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  movies: MoviesReducer,
  searchResults: SearchReducer,
  actor: ActorReducer,
  trailer: TrailerReducer
});

export default RootReducer;
