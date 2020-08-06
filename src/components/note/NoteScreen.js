import React, { useEffect, useRef } from 'react';
import NotesAppBar from './NotesAppBar';
import { useSelector } from 'react-redux';
import useForm from '../../hook/useForm';

const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const [formValue, handleInputChange, resetForm] = useForm(note);

  const activeId = useRef(note.id);
  useEffect(() => {
    if (note.id !== activeId.current) {
      resetForm(note);
      activeId.current = note.id;
    }
  }, [note, resetForm]);

  const { title, body, url } = formValue;
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
            <img
              src="https://scx1.b-cdn.net/csz/news/800/2017/theoreticala.jpg"
              alt="img"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteScreen;
