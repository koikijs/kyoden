import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import event from './event';

export function initializeStore(initialState = {}) {
  return createStore(
    combineReducers({
      event,
    }),
    initialState,
    composeWithDevTools(applyMiddleware()),
  );
}
