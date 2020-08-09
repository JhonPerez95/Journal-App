import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import {
  startSaveNotes,
  startUploading,
} from '../../redux/actions/noteActions';

const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);
  const noteDate = moment(active.date);

  const hanldeSave = () => {
    dispatch(startSaveNotes(active));
  };

  const handlePicture = () => {
    document.querySelector('#inputSelector').click();
  };

  const handleSelector = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };
  return (
    <div className="notes__appbar">
      <span>{noteDate.format('LL')}</span>

      <input
        id="inputSelector"
        type="file"
        name="file"
        style={{ display: 'none' }}
        onChange={handleSelector}
      />

      <div className="">
        <button className="btn" onClick={handlePicture}>
          Picture
        </button>
        <button className="btn" onClick={hanldeSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
