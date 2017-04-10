import { connect } from 'react-redux';
import {fetchTrailer} from '../../actions/trailer_actions';
import { logout } from '../../actions/session_actions';
import TrailerPlay from './trailer_play';



const mapStateToProps = (state, ownProps) => {
  return ({loggedIn: Boolean(state.session.currentUser),
    trailer: state.trailer})
};

const mapDispatchToProps = (dispatch) => (
  {logout: () => dispatch(logout()),
  fetchTrailer: name => dispatch(fetchTrailer(name)),
  rateMovie: (id, rating) => dispatch(rateMovie(id, rating))}
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrailerPlay);
