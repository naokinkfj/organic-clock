import React, { useState } from 'react';
// import { PartyPropsType, PartyConsumer } from './contexts/PartyContext';

import './App.css';
import logo from './logo.svg';

// const Party: React.FC<PartyPropsType> = () => (
//   <PartyConsumer>
//     {(props: PartyPropsType) => (
//       <div>
//         The party will held at: {props.place}'s place.
//       </div>
//     )}
//   </PartyConsumer>
// );

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1>react-organic-clock</h1>
        <img src={logo} className="app-logo" alt="logo" />
      </header>
      <div className="app-nav">
        <a href="/">[ Top ]</a>
        <a href="/girl">[ Girl ]</a>
        <a href="/contact">[ Contact ]</a>
      </div>
      <div className="app-message">
        Welcome to <span className="app-name">react-organic-clock</span> !!!
      </div>
      <div className="app-clicks">
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click
        </button>
      </div>
    </div>
  );
};

export default App;
