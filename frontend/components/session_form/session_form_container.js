import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session}, ownProps) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
  formType: ownProps.formType
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = (ownProps.formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    login: user => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
