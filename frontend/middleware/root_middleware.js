import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import MoviesMiddleware from './movies_middleware';
import SearchMiddleware from './search_middleware';
import ActorMiddleware from './actor_middleware';


const RootMiddleware = applyMiddleware(
  SessionMiddleware, MoviesMiddleware, ActorMiddleware
);

export default RootMiddleware;
