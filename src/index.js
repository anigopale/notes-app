import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


import App from './components/app';
import Test from './components/test';
import Header from './components/nav';
import Login from './components/login';
import Home from './components/home';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="nested" component={Test} />
        <Route path="login" component={Login} />

      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
