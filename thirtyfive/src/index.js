import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { reducer } from './redux/reducer'
import logger from 'redux-logger';
import { Provider } from 'react-redux'

require('dotenv').config()

const store = createStore(reducer)



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
