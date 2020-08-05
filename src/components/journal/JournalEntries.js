import React from 'react';
import JournalEntry from './JournalEntry';
import { useSelector } from 'react-redux';

const JournalEntries = () => {
  const { notes } = useSelector((state) => state.notes);

  return (
    <div className="journal__entries">
      {notes.map((item) => (
        <JournalEntry key={item.id} {...item} />
      ))}
    </div>
  );
};

export default JournalEntries;
