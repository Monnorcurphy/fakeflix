import { connect } from 'react-redux';
import {fetchMovie} from '../../actions/movie_actions';
import { logout } from '../../actions/session_actions';
import TrailerPlay from './trailer_play';
import {rateMovie} from '../../actions/movie_actions';


const mapStateToProps = (state, ownProps) => {
  return ({loggedIn: Boolean(state.session.currentUser),
    movie: state.movies[ownProps.params.movieId]})
};

const mapDispatchToProps = (dispatch) => (
  {logout: () => dispatch(logout()),
  fetchMovie: id => dispatch(fetchMovie(id)),
  rateMovie: (id, rating) => dispatch(rateMovie(id, rating))}
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrailerPlay);
