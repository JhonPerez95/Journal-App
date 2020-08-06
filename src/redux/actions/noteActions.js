import Swal from 'sweetalert2';

import { db } from '../../firebase/firebaseConfig';
import { types } from '../types/types';
import { loadNotes } from '../../helpers/loadNotes';

export const activeNote = (id, note) => {
  return {
    type: types.notesActive,
    payload: {
      id,
      ...note,
    },
  };
};

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };

    const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);

    dispatch(activeNote(docRef.id, newNote));
  };
};

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startSaveNotes = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!note.url) {
      note.url = null;
    }
    const noteUpdate = { ...note };
    delete noteUpdate.id;

    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteUpdate);
    dispatch(refreshNote(note.id, note));
    Swal.fire('Saved', note.title, 'success');
  };
};

export const refreshNote = (id, note) => {
  return {
    type: types.notesUpdate,
    payload: {
      id,
      ...note,
    },
  };
};
