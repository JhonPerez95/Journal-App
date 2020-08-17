import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store'; //ES6 modules
import { MemoryRouter } from 'react-router-dom';

import RegisterScreen from '../../../components/auth/RegisterScreen';
import { types } from '../../../redux/types/types';

// Config Store Redux
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = { auht: {}, ui: { loading: false, msgError: null } };
let store = mockStore(initState);
// store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <RegisterScreen />
    </MemoryRouter>
  </Provider>
);

describe('Test the component ', () => {
  test('should to render <RegisterScreen /> ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call actions ', () => {
    const emailField = wrapper.find('input[name="email"]');

    emailField.simulate('change', {
      target: {
        value: '',
        name: 'email',
      },
    });
    wrapper.find('form').prop('onSubmit')({
      preventDefault() {},
    });

    const resAction = store.getActions();
    // console.log(resAction);
    expect(resAction[0]).toEqual({
      type: types.uiSetError,
      payload: 'Name is required',
    });
  });
});
