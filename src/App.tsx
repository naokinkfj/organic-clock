import React from 'react';

import './App.css';
import logo from './logo.svg';

const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1>organic-clock</h1>
        <img src={logo} className="app-logo" alt="logo" />
      </header>
      <div className="app-nav">
        <a href="/">[ Top ]</a>
        <a href="/girl">[ Girl ]</a>
        <a href="/contact">[ Contact ]</a>
      </div>
      <div className="app-message">
        Enjoy the <span className="app-name">organic-clock</span> !!!
      </div>
    </div>
  );
}

export default App;
