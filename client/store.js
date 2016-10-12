import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

// import ROOT reducer
import rootReducer from './reducers/index';

var messagesData = [];
var friendsData = [];

const middleware = applyMiddleware(thunk);

const defaultState = {
  messages: messagesData,
  friends: friendsData
};

const store = createStore(rootReducer, defaultState, middleware);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;