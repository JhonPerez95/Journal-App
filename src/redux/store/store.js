import { createStore, combineReducers } from 'redux';

import { authReducer } from '../reducers/authReducer';

// REDUCER
const reducer = combineReducers({
  authReducer,
});

export const store = createStore(reducer);
