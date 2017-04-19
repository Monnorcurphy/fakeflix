import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import ActorDetail from './actor_detail';
import {fetchActor} from '../../actions/actor_actions';


const mapStateToProps = (state, ownProps) => {

  if (state.actor.name && ownProps.params){
    if(state.actor.name.toLowerCase() != ownProps.params.actorId.toLowerCase()){
      return ({loggedIn: Boolean(state.session.currentUser),
        ownProps})
    }
    else{
      return ({
        loggedIn: Boolean(state.session.currentUser),
        ownProps,
        filmography: state.actor.cast,
        actor: state.actor})}
    }
    else{
      return ({loggedIn: Boolean(state.session.currentUser),
        ownProps})


  }

};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  fetchActor: id => dispatch(fetchActor(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActorDetail);
