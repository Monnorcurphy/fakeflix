import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <div>
    <nav className="login-signup">
      <Link to="/" className="header-link"><h1>ActFlix</h1></Link>  &nbsp;&nbsp;
      <Link to="/login" activeClassName="current">Login</Link>
      &nbsp;&nbsp;
      <Link to="/signup" activeClassName="current">Sign up</Link>
    </nav>
  </div>


);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">{currentUser.username}</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
