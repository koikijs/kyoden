import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import member from './member';
import scrooge from './scrooge';
import event from './event';

export function initializeStore(initialState = {}) {
  return createStore(
    combineReducers({
      member,
      scrooge,
      event,
    }),
    initialState,
    composeWithDevTools(applyMiddleware())
  );
}
