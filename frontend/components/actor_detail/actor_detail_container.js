import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import ActorDetail from './actor_detail';
import {fetchActor} from '../../actions/actor_actions';


const mapStateToProps = (state, ownProps) => {
  return ({ownProps, filmography: state.actor})

};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  fetchActor: id => dispatch(fetchActor(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActorDetail);
