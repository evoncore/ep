import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import messages from './messages';
import friends from './friends';

const rootReducer = combineReducers({
  messages,
  friends,
  routing: routerReducer
});

export default rootReducer;