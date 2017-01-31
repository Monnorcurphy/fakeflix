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

// ADD A MOVIE-SEARCH DIV, CHECK APPLICATION CSS FOR NAME

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

    <div>
      <img className="splash-gif"
           src="http://res.cloudinary.com/dqiuefax1/image/upload/v1480898800/a7AM8L_i4vcko.gif" />
    </div>

    <div className ='over-demo'>
      <div>
      <h2 className='attention-line'>Tons of Trailers</h2>
      </div>
      <div>
      <p className='tag-line'>Only a few clicks away.</p>
      </div>
      <div>
      <button className='splash-demo' onClick= {this.demo}>Demo Login</button>
      </div>
    </div>

    <div className='promotional-container'>

      <div className='movie-selection'>
        <img className='selection-gif' src='http://res.cloudinary.com/dqiuefax1/image/upload/v1485901918/ezgif.com-optimize_1_y3h5jv.gif'/>
        <div>
          <p className='selection-text'> If you are bored by the idea
          of spending hours watching a film, but you fear the disaster of
          becoming a social outcast, worry not! You can watch hundreds of
          free trailers, here on our website!</p>
        </div>
      </div>

      <div className='moving-trailer'>
        <img className='movie-gif' src='http://res.cloudinary.com/dqiuefax1/image/upload/v1485903874/ezgif.com-optimize_2_jr8i2y.gif'/>
        <div>
        <p className='trailer-text'>If you are distracted easily, or have
        a desire to tell someone just what you think of a trailer, have
        no fear, Fakeflix is here to satiate that urge for you. Hundreds
        of trailers which only last a few minutes, you'll never have to
        pay attention hours of dialogue again!</p>
        </div>
      </div>
    </div>

        <nav className= 'footer'>
          <div className='legal'>
          <p className="copyright">© 2016 Fakeflix. All rights reserved.</p>
          </div>
          <div className="contact-info">
            <div className='linkedin-div'>
              <a href="https://www.linkedin.com/profile/guided?trk=uno-choose-ge-no-intent&dl=no" className="linkedin ">
                LinkedIn</a>
            </div>
            <div className= 'github-div' >
              <a href="https://github.com/Monnorcurphy/fullstack" className="github">
                Github</a>
            </div>
          </div>
      </nav>
  </div>)
}}
}

Splash.contextTypes = {
  store: React.PropTypes.object
}

export default withRouter(Splash);
