import { connect } from 'react-redux';
import {searchMovies} from '../../actions/search_actions';
import SearchList from './search';
import {recieveSearch} from '../../actions/search_actions'


const mapStateToProps = (state, ownProps) => {

  return ({movies: state.movies, search: state.search})
};

const mapDispatchToProps = (dispatch) => (
  {searchMovies: movies => dispatch(searchMovies(movies),
  recieveSearch: movies => dispatch(recieveSearch(movies))}
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchList);
