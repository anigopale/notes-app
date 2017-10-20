import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Test from './components/test';
import Header from './components/nav';
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';
import Signout from './components/signout';
import Features from './components/auth/features';
import { AUTH_USER } from './actions/types';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
if (token) {
  store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="nested" component={Test} />
        <Route path="login" component={Login} />
        <Route path="signup" component={Signup} />
        <Route path="signout" component={Signout} />
        <Route path="features" component={Features} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
