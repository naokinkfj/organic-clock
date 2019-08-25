import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AgeActionType } from './actions/index';
import { AgeReducer } from './reducers/index';
import { StoreStateType } from './types/index';
import Girl from './containers/Girl';

import * as serviceWorker from './serviceWorker';
import './index.css';

const store = createStore<StoreStateType, AgeActionType, any, any>(
  AgeReducer,
  { age: 1, name: 'Jane' }
);

const root = document.getElementById('root') as HTMLElement;

const render = () => ReactDOM.render(
  <Provider store={store}>
    <Girl />
  </Provider>,
  root
);

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
