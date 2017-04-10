import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import MoviesMiddleware from './movies_middleware';
import SearchMiddleware from './search_middleware';
import ActorMiddleware from './actor_middleware';
import TrailerMiddleware from './trailer_middleware';


const RootMiddleware = applyMiddleware(
  SessionMiddleware, MoviesMiddleware, ActorMiddleware, TrailerMiddleware
);

export default RootMiddleware;
