import React from 'react';

import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../redux/actions/noteActions';

const JournalEntry = ({ title, body, url, date, id }) => {
  const noteDate = moment(date);
  const dispatch = useDispatch();
  const handleClickEntries = () => {
    dispatch(activeNote(id, { title, body, url, date }));
  };
  return (
    <div className="journal__entry pointer" onClick={handleClickEntries}>
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover',
          }}
        ></div>
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>
      <div className="journal__entry-date-box">
        <samp>{noteDate.format('dddd')}</samp>
        <h4>{noteDate.format('Do')}</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
