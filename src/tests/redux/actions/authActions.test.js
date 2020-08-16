import '@testing-library/jest-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store'; //ES6 modules

import {
  login,
  logout,
  startLogout,
  startEmailLogin,
} from '../../../redux/actions/authActions';
import { types } from '../../../redux/types/types';

// Config Store Redux
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {};
let store = mockStore(initState);

describe('Test the actions authActions', () => {
  // Refresh store
  beforeEach(() => {
    store = mockStore(initState);
  });

  test('should do login y logout actions', () => {
    const res = login('123-id', 'user-Test');
    expect(res).toEqual({
      type: types.login,
      payload: {
        uid: '123-id',
        displayName: 'user-Test',
      },
    });
    expect(logout()).toEqual({ type: types.logout });
  });

  test('should call startLogout', async () => {
    await store.dispatch(startLogout());
    const resAction = store.getActions();
    // console.log(resAction);
    expect(resAction[0]).toEqual({
      type: types.logout,
    });
    expect(resAction[1]).toEqual({
      type: types.notesLogoutCleaning,
    });
  });

  test('should  startEmailLogin ', async () => {
    const email = 'test@gmail.com';
    const pass = '123456';
    await store.dispatch(startEmailLogin(email, pass));
    const resAction = store.getActions();
    // console.log(resAction);
    expect(resAction[1]).toEqual({
      type: types.login,
      payload: {
        uid: expect.any(String),
        displayName: null,
      },
    });
  });
});
