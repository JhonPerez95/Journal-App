import '@testing-library/jest-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store'; //ES6 modules

import {
  startNewNote,
  startLoadingNotes,
  startSaveNotes,
} from '../../../redux/actions/noteActions';
import { types } from '../../../redux/types/types';
import { db } from '../../../firebase/firebaseConfig';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = { auth: { uid: 'Testing' } };
let store = mockStore(initState);

describe('Test the actions noteActions', () => {
  // Refresh store
  beforeEach(() => {
    store = mockStore(initState);
  });

  test('should create new note', async () => {
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

    // Delete Note
    const noteId = actions[0].payload.id;
    await db.doc(`Testing/journal/notes/${noteId}`).delete();
  });

  test('should load notes ', async () => {
    await store.dispatch(startLoadingNotes('Testing'));
    const resp = store.getActions();
    // console.log(resp[0].payload[0]);
    expect(resp[0]).toEqual({
      type: types.notesLoad,
      payload: expect.any(Array),
    });

    const objectExpect = {
      id: expect.any(String),
      body: expect.any(String),
      date: expect.any(Number),
      title: expect.any(String),
    };
    expect(resp[0].payload[0]).toMatchObject(objectExpect);
  });

  test('should update note', async () => {
    const note = {
      id: '7tdgg0pXFZwWGROtPHmU',
      body: 'Testing Body',
      title: 'Testing Title ',
    };
    await store.dispatch(startSaveNotes(note));
    const resp = store.getActions();
    expect(resp[0].type).toBe(types.notesUpdate);

    const docRef = await db.doc(`Testing/journal/notes/${note.id}`).get();
    // console.log(docRef.data());
    expect(docRef.data().title).toBe(note.title);
  });
});
