import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import JournalEntries from './JournalEntries';
import { startLogout } from '../../redux/actions/authActions';
import { startNewNote, notesLoguot } from '../../redux/actions/noteActions';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
    dispatch(notesLoguot());
  };

  const handleAddNew = () => {
    dispatch(startNewNote());
  };

  const { name } = useSelector((state) => state.auth);
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon" />
          <span> {name}</span>
        </h3>
        <button className="btn" onClick={handleLogout}>
          logout
        </button>
      </div>
      <div className="journal__new-entry" onClick={handleAddNew}>
        <i className="far fa-calendar-plus fa-5x" />
        <p className="mt-5">New Entry</p>
      </div>
      <JournalEntries />
    </aside>
  );
};

export default Sidebar;
