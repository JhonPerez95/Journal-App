import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store'; //ES6 modules

import { startLogout } from '../../../redux/actions/authActions';
import Sidebar from '../../../components/journal/Sidebar';
import { startNewNote } from '../../../redux/actions/noteActions';

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

jest.mock('../../../redux/actions/authActions', () => ({
  startLogout: jest.fn(),
}));
jest.mock('../../../redux/actions/noteActions', () => ({
  startNewNote: jest.fn(),
}));

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <Sidebar />
    </MemoryRouter>
  </Provider>
);

describe('Tests the component <Sidebar/>', () => {
  test('should show correctly ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call to action startLogout', () => {
    wrapper.find('button').prop('onClick')();
    expect(startLogout).toHaveBeenCalled();
  });

  test('should call to action startNewNote', () => {
    wrapper.find('.journal__new-entry').prop('onClick')();
    expect(startNewNote).toHaveBeenCalled();
  });
});
