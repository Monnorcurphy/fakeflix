import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import MovieIndex from './movie_index';


const mapStateToProps = (state, ownProps) => {

  return ({loggedIn: Boolean(state.session.currentUser)})
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  fetchMovies: () => dispatch(fetchMovies)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieIndex);
