import { connect } from 'react-redux';
import { logout, demo } from '../../actions/session_actions';
import Splash from './splash';
import {fetchMovie} from '../../actions/movie_actions';

const mapStateToProps = (state) => {
  
  return{loggedIn: Boolean(state.session.currentUser),
  movie: state.movies[Object.keys(state.movies)]}
};

const mapDispatchToProps = dispatch => ({
  demo: () => dispatch(demo()),
  fetchMovie: id => dispatch(fetchMovie(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
