import { applyMiddleware } from 'redux';

import SessionMiddleware from '../middleware/session_middleware';
import MoviesMiddleware from '../middleware/movies_middleware';

const RootMiddleware = applyMiddleware(
    SessionMiddleware, MoviesMiddleware
);

export default RootMiddleware;
