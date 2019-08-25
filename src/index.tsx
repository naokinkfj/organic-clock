import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { AgeActionType } from './actions/index';
import { AgeReducer } from './reducers/index';
import { StoreStateType } from './types/index';
import App from './App';
import Girl from './containers/Girl';
import Contact from './components/Contact';

import * as serviceWorker from './serviceWorker';
import './index.css';

const store = createStore<StoreStateType, AgeActionType, any, any>(
  AgeReducer,
  { age: 1, name: 'Jane' }
);

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
