import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store'; //ES6 modules
import JournalEntry from '../../../components/journal/JournalEntry';
import { activeNote } from '../../../redux/actions/noteActions';

// Config Store Redux
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};
let store = mockStore(initState);
store.dispatch = jest.fn();

const note = {
  id: 'idaaf65sda5sas5s',
  title: 'Title Testing',
  body: 'Body Testing',
  url: 'https://site.com/testImg.jpg',
  date: 0,
};
const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <JournalEntry {...note} />
    </MemoryRouter>
  </Provider>
);

describe('Test the component <JournalEntry/>', () => {
  test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should active note', () => {
    wrapper.find('.journal__entry').prop('onClick')();

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(
      activeNote(note.id, { ...note })
    );
  });
});
