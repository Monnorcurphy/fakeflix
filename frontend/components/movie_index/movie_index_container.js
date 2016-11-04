import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import {fetchMovies} from '../../actions/movie_actions';
import MovieIndex from './movie_index';


const mapStateToProps = (state, ownProps) => {
  return ({
    loggedIn: Boolean(state.session.currentUser),
     movies: state.movies })
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchMovies: () => dispatch(fetchMovies())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieIndex);
