import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store'; //ES6 modules

import { activeNote } from '../../../redux/actions/noteActions';
import NoteScreen from '../../../components/note/NoteScreen';

// Config Store Redux
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: { uid: 'idTesting', name: 'Testing Name' },
  ui: { loading: false, msgError: null },
  notes: {
    notes: [],
    active: {
      id: 1234,
      body: 'Test body',
      title: 'test Title',
    },
  },
};
let store = mockStore(initState);
store.dispatch = jest.fn();

jest.mock('../../../redux/actions/noteActions', () => ({
  activeNote: jest.fn(),
}));

const wrapper = mount(
  <Provider store={store}>
    <NoteScreen />
  </Provider>
);

describe('Test the component <NoteScrren/>', () => {
  test('should show correctly ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call action activeNote', () => {
    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        value: 'Title the Testing',
        name: 'title',
      },
    });
    expect(activeNote).toHaveBeenCalled();
  });
});
