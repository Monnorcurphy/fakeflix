import React from 'react';
import { Link } from 'react-router';
import Splash from './splash/splash_container';

const App = ({ children }) => (
  <div>
    <header className ='logo'>
      <Link to="/" className="header-link splash-logo">
        <h1>FAKEFLIX</h1>
      </Link>

    </header>

    {children}
  </div>
);

export default App;
