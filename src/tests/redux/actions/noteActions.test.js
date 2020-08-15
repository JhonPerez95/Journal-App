import '@testing-library/jest-dom';

import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store'; //ES6 modules
import { startNewNote } from '../../../redux/actions/noteActions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({ auth: { uid: 'Testing' } });

describe('Test the actions noteActions', () => {
  test('should ', async () => {
    await store.dispatch(startNewNote());
  });
});
