import React from 'react';
import { Link } from 'react-router';
import Splash from './splash/splash_container';

const App = ({ children }) => (
  <div>
    <header className ='logo'>
      <Link to="/" className="header-link">
        <h1>ACTFLIX</h1>
      </Link>

    </header>

    {children}
  </div>
);

export default App;
