import React from 'react';

const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundImage:
            'url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg)',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">un nuevo dia</p>
        <p className="journal__entry-content">
          es un nuevo dia para aprender un poco mas para asi alcanzar los
          objetivos!!!
        </p>
      </div>
      <div className="journal__entry-date-box">
        <samp>Monday</samp>
        <h4>04</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
