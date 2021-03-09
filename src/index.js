import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { bugAdd, bugRemove, bugResolved } from './actionCreator';

import store from './store'

const unsubscribe = store.subscribe(() => {
  console.log("store change ", store.getState())
});
store.dispatch(bugAdd("we find a bug1"));
store.dispatch(bugAdd("we find a bug2"));
store.dispatch(bugResolved(2));
store.dispatch(bugResolved(1));
store.dispatch(bugRemove(1));
store.dispatch(bugRemove(2));
console.log(unsubscribe());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

