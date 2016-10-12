import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// Components
import App from './components/App';
import Home from './components/Home/Home';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import Settings from './components/Settings/Settings';

// Guest Components
import SignUp from './guest-components/SignUp/SignUp';

// Errors
import HTTP_404 from './components/Errors/404'

export const userRouter = (
  <Provider store={store}>
    <Router history={history}>
      <Route component={App}>
        <Route path="/" component={Home}/>
        <Route path="news" component={News}/>
        <Route path="friends" component={Friends}/>
        <Route path="settings" component={Settings}/>

        <Route path="*" component={HTTP_404}/>
      </Route>
    </Router>
  </Provider>
);

export const guestRouter = (
  <Provider store={store}>
    <Router history={history}>
      <Route component={App}>
        <Route path="/" component={SignUp}/>
        <Route path="news" component={News}/>

        <Redirect from="friends" to="/"/>
        <Redirect from="settings" to="/"/>

        <Route path="*" component={HTTP_404}/>
      </Route>
    </Router>
  </Provider>
);
