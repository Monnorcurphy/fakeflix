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
    <nav>
      <Link to="/" className="header-bar">
          <h1 className= 'splash logo'>FAKEFLIX</h1>
      </Link>

      <div className='login-signup'>
        <button className= 'login' onClick={this.openModal.bind(this, 'login')}>Login!</button>
        <button className= 'signup' onClick={this.openModal.bind(this, 'signup')}>Sign up!</button>
      </div>
        <div className ='over-demo'>
          <h2>Tons of Trailers</h2>
          <p>Only a few clicks away.</p>
        </div>

      <button className='splash-demo' onClick= {this.demo}>Demo Login</button>
        <Modal isOpen={this.state.authModal}
           onRequestClose={this.closeModal.bind(this)}
           style={authModalStyle}>

         <SessionFormContainer formType={this.state.formType}
            closeModal={this.closeModal.bind(this)}
            toggleForm={this.toggleForm.bind(this)}
          />
        </Modal>

    </nav>

  </div>)
}}
}

Splash.contextTypes = {
  store: React.PropTypes.object
}

export default withRouter(Splash);
