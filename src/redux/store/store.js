import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';
import { noteReducer } from '../reducers/noteReducer';

//
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// REDUCER
const reducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  notes: noteReducer,
});

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
