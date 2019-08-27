import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from './redux/create';
// import { composeContextProviders } from './lib/utils';
// import { PartyProvider } from './contexts/PartyContext';
// import { WeatherProvider } from './contexts/WeatherContext';

import App from './App';
import Girl from './containers/Girl';
import Contact from './components/Contact';

import * as serviceWorker from './serviceWorker';
import 'normalize.css';
import './index.css';

const store = configureStore();

// const render = () => ReactDOM.render(
//   <Provider store={store}>
//     {composeContextProviders(
//       [
//         [PartyProvider, { place: 'Joe', people: 10 }],
//         [WeatherProvider, { weather: 'fine', high: 33, low: 28 }]
//       ],
//       <Router>
//         <div className="wrapper">
//           <Route path="/" component={App} />
//           <Route path="/girl" component={Girl} />
//           <Route path="/contact" component={Contact} />
//         </div>
//       </Router>
//     )}
//   </Provider>,
//   document.getElementById('root') as HTMLElement
// );
const render = () => ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="wrapper">
        <Route path="/" component={App} />
        <Route path="/girl" component={Girl} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
