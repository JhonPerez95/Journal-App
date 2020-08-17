import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store'; //ES6 modules

import LoginScreen from '../../../components/auth/LoginScreen';
import { MemoryRouter } from 'react-router-dom';
import {
  startGoogleLogin,
  startEmailLogin,
} from '../../../redux/actions/authActions';

// Config Store Redux
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = { auht: {}, ui: { loading: false, msgError: null } };
let store = mockStore(initState);
store.dispatch = jest.fn();

// Simulation action startGoogleLogin
jest.mock('../../../redux/actions/authActions', () => ({
  startGoogleLogin: jest.fn(),
  startEmailLogin: jest.fn(),
}));

describe('Test the component <LoginScreen/>', () => {
  // Refresh store and mock
  beforeEach(() => {
    store = mockStore(initState);
    jest.clearAllMocks();
  });

  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <LoginScreen />
      </MemoryRouter>
    </Provider>
  );

  test('should to render component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should  call actions startGoogleLogin', () => {
    wrapper.find('.google-btn').prop('onClick')();
    expect(startGoogleLogin).toHaveBeenCalled();
  });

  test('should  call action startEmailLogin', () => {
    wrapper.find('form').prop('onSubmit')({ preventDefault() {} });
    expect(startEmailLogin).toHaveBeenCalledWith('', '');
  });
});
