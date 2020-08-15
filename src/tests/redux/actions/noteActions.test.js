import '@testing-library/jest-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store'; //ES6 modules

import { startNewNote } from '../../../redux/actions/noteActions';
import { types } from '../../../redux/types/types';
import { db } from '../../../firebase/firebaseConfig';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({ auth: { uid: 'Testing' } });

describe('Test the actions noteActions', () => {
  test('should ', async () => {
    await store.dispatch(startNewNote());
    const actions = store.getActions();
    // console.log(actions);
    expect(actions[0]).toEqual({
      type: types.notesActive,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        url: '',
        date: expect.any(Number),
      },
    });
    expect(actions[1]).toEqual({
      type: types.notesAddNew,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        url: '',
        date: expect.any(Number),
      },
    });

    const noteId = actions[0].payload.id;
    await db.doc(`Testing/journal/notes/${noteId}`).delete();
  });
});
