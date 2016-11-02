import React from 'react';
import { Link,  withRouter} from 'react-router';

const Splash = ({ children }) => (
  <div>
    <header>
      <Link to="/" className="header-link"><h1>ActFlix</h1></Link>
      <nav className="login-signup">
        <Link to="/login" activeClassName="current">Login</Link>
        &nbsp;&nbsp;
        <Link to="/signup" activeClassName="current">Sign up</Link>
      </nav>
      <div>
      <img className='splash-image' src="http://static4.businessinsider.com/image/55bbe979dd0895ab698b45c6-3200-1800/tom-cruise-mission-impossible-5-plane-scene.jpg"/>
      </div>
    </header>

  </div>
);

export default withRouter(Splash)
