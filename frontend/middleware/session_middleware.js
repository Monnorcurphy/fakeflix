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

export default (state) => next => action => {
  const successCallback = user => state.dispatch(receiveCurrentUser(user));
  const errorCallback = xhr => state.dispatch(receiveErrors(xhr.responseJSON));


  switch(action.type){

    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case LOGOUT:

      logout();
      return next(action);
    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    case DEMO:

    
      let user = {user:{username:'guest' , password: 'password'}};
      login(user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
