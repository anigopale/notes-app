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
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="nested" component={Test} />
        <Route path="login" component={Login} />
        <Route path="signup" component={Signup} />
        <Route path="signout" component={Signout} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
