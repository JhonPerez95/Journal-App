import { db } from '../firebase/firebaseConfig';

export const loadNotes = async (id) => {
  const notesSnap = await db.collection(`${id}/journal/notes`).get();
  const notes = [];

  notesSnap.forEach((item) => {
    notes.push({
      id: item.id,
      ...item.data(),
    });
  });

  return notes;
};
