import React from 'react';
import NotesAppBar from './NotesAppBar';

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          className="notes__title-input"
          placeholder="Some awesome title"
        />
        <textarea
          placeholder=" What happended today"
          className="notes__textarea"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://scx1.b-cdn.net/csz/news/800/2017/theoreticala.jpg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;
