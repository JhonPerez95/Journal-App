import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { startSaveNotes } from '../../redux/actions/noteActions';

const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);
  const noteDate = moment(active.date);

  const hanldeSave = () => {
    dispatch(startSaveNotes(active));
  };
  return (
    <div className="notes__appbar">
      <span>{noteDate.format('LL')}</span>
      <div className="">
        <button className="btn">Picture</button>
        <button className="btn" onClick={hanldeSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
