import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store'; //ES6 modules
import { MemoryRouter } from 'react-router-dom';

import { firebase } from '../../firebase/firebaseConfig';
import AppRoutes from '../../routes/AppRoutes';
import { login } from '../../redux/actions/authActions';
import { act } from 'react-dom/test-utils';

// Config Store Redux
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: { uid: 'idTesting', name: 'Testing Name' },
  ui: { loading: false, msgError: null },
  notes: {
    notes: [],
    active: {
      id: 'asdasdas',
      title: 'test Title',
    },
  },
};
let store = mockStore(initState);
store.dispatch = jest.fn();

// Simulation action startGoogleLogin
jest.mock('../../redux/actions/authActions', () => ({
  login: jest.fn(),
}));

describe('Test the component <AppRoutes', () => {
  test('should calle action login', async () => {
    let user;
    await act(async () => {
      const userCred = await firebase
        .auth()
        .signInWithEmailAndPassword('test@gmail.com', '123456');
      user = userCred.user;
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <AppRoutes />
          </MemoryRouter>
        </Provider>
      );
    });
    expect(login).toHaveBeenCalled();
    expect(login).toHaveBeenCalledWith('KEor8DF2zzVN2ntHmkHxkkk29Wi2', null);
  });
});
