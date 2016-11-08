import { connect } from 'react-redux';
import {searchMovies} from '../../actions/search_actions';
import SearchList from './search';


const mapStateToProps = (state, ownProps) => {
  return ({searchMovies: state.movies})
};

const mapDispatchToProps = (dispatch) => (
  {searchMovies: movies => dispatch(searchMovies(movies))}
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchList);
