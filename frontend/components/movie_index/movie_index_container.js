import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import {fetchMovies} from '../../actions/movie_actions';
import MovieIndex from './movie_index';
import {recieveSearch} from '../../actions/search_actions'


const mapStateToProps = (state, ownProps) => {
  return ({
    loggedIn: Boolean(state.session.currentUser),
     movies: state.movies,
     searchResults: state.searchResults})
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchMovies: () => dispatch(fetchMovies()),
  recieveSearch: movies => dispatch(recieveSearch(movies))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieIndex);
