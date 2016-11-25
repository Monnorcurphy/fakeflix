import React from 'react';
import { Link,  withRouter} from 'react-router';
import {demo} from '../../actions/session_actions';
import SessionFormContainer from '../session_form/session_form_container';
import Modal from 'react-modal';
import {authModalStyle} from '../../util/modal_styles';

document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.body);
});

class Splash extends React.Component{

  constructor(props){
    super(props);
    this.state = {authModal: false, formType:''};
    this.demo = this.demo.bind(this);
    this.state.movie = {}

  }

  componentWillReceiveProps(nextProps){
 if(nextProps.currentUser && nextProps.currentUser.id){
   this.props.router.push('/app');
   }
 }

 componentDidUpdate() {
   this.redirectIfLoggedIn();

 }

 redirectIfLoggedIn() {
   if (this.props.loggedIn){
     this.props.router.replace("/main");
   }
 }


  openModal(type){
    this.props;
    this.setState({authModal: true, formType: type});
  }

  closeModal(){
    this.setState({authModal: false});
  }

  toggleForm(){
    if(this.state.formType === 'signup'){
      this.setState({formType: 'login'});
    }else{
      this.setState({formType: 'signup'});
    }
  }

  demo(){
    this.props.demo()
  }

  render () {
    {
    return (<div className='splash-div'>
    <nav className='header'>
      <div className='logo-div'><Link to="/" className="header-bar">
          <h1 className= 'splash logo'>FAKEFLIX</h1>
      </Link>
    </div>

      <div className='login-signup'>
        <div className= 'login-div'>
          <button className= 'login' onClick={this.openModal.bind(this, 'login')}>Login</button>
        </div>
        <div className='signup-div'>
        <button className= 'signup' onClick={this.openModal.bind(this, 'signup')}>Sign up</button>
        </div>
      </div>
        <Modal isOpen={this.state.authModal}
           onRequestClose={this.closeModal.bind(this)}
           style={authModalStyle}>

         <SessionFormContainer formType={this.state.formType}
            closeModal={this.closeModal.bind(this)}
            toggleForm={this.toggleForm.bind(this)}
          />
        </Modal>

    </nav>

    <div className ='over-demo'>
      <div>
      <h2>Tons of Trailers</h2>
      </div>
      <div>
      <p>Only a few clicks away.</p>
      </div>
      <div>
      <button className='splash-demo' onClick= {this.demo}>Demo Login</button>
      </div>
    </div>

        <nav className= 'footer'>
          <p>© 2016 Fakeflix. All rights reserved.</p>
        <a href="https://www.linkedin.com/profile/guided?trk=uno-choose-ge-no-intent&dl=no" className="footer-bar">
              <p className= 'logo linked'>Linkedin</p>
          </a>
          <a href="https://github.com/Monnorcurphy/fullstack" className="footer-bar">
              <p className= 'logo'>Github</p>
            </a>
          </nav>
  </div>)
}}
}

Splash.contextTypes = {
  store: React.PropTypes.object
}

export default withRouter(Splash);
