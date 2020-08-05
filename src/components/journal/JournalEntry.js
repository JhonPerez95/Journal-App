import React from 'react';

import moment from 'moment';

const JournalEntry = ({ title, body, url, date }) => {
  const noteDate = moment(date);
  return (
    <div className="journal__entry pointer">
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
