import { SEARCH} from '../actions/search_actions';
import { receiveSearch} from '../util/movie_api_util';

export default (state) => next => action => {
  const receiveSearchMovies = movies => {

    return (state.dispatch(receiveSearch(movies)))
  }

  switch(action.type){
    case SEARCH:
      receiveSearchMovies
      return next(action);
    default:
      return next(action);
  }
};
