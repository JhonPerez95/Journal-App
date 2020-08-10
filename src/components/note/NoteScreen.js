import React, { useEffect, useRef } from 'react';
import NotesAppBar from './NotesAppBar';
import { useSelector, useDispatch } from 'react-redux';
import useForm from '../../hook/useForm';
import { activeNote, startDeleting } from '../../redux/actions/noteActions';

const NoteScreen = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.notes);

  const [formValue, handleInputChange, resetForm] = useForm(note);
  const { title, body, url, id } = formValue;

  const activeId = useRef(note.id);

  // update form
  useEffect(() => {
    if (note.id !== activeId.current) {
      resetForm(note);
      activeId.current = note.id;
    }
  }, [note, resetForm]);

  // update state note.active
  useEffect(() => {
    dispatch(activeNote(formValue.id, { ...formValue }));
  }, [formValue, dispatch]);

  const hanldeDelete = () => {
    dispatch(startDeleting(id));
    // console.log('click Delete', id);
  };

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          className="notes__title-input"
          placeholder="Some awesome title"
          name="title"
          onChange={handleInputChange}
          value={title}
        />
        <textarea
          placeholder=" What happended today"
          className="notes__textarea"
          name="body"
          onChange={handleInputChange}
          value={body}
        ></textarea>
        {url && (
          <div className="notes__image">
            <img src={url} alt="img" />
          </div>
        )}
      </div>
      <button className="btn btn-danger" onClick={hanldeDelete}>
        Delete
      </button>
    </div>
  );
};

export default NoteScreen;
