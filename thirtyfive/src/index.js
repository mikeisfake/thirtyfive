import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/index.css';
import App from './App';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers/rootReducer'

require('dotenv').config()

const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
