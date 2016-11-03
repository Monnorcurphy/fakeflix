// actions
import { receiveCurrentUser,
         receiveErrors,
         demo,
         LOGIN,
         LOGOUT,
         SIGNUP,
         DEMO} from '../actions/session_actions';

// api utils
import { login, signup, logout } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));

  switch(action.type){
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
      break;
    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    case DEMO:
      let user = {user:{username: 'monnorcurphy' , password: 'password'}}
      login(user, successCallback, errorCallback);
    default:
      return next(action);
  }
};
