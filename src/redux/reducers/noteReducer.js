import { types } from '../types/types';

const initialState = {
  notes: [],
  active: null,
};

export const noteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...payload,
        },
      };
    case types.notesLoad:
      return {
        ...state,
        notes: [...payload],
      };
    case types.notesUpdate:
      return {
        ...state,
        notes: state.notes.map((item) =>
          item.id === payload.id ? payload : item
        ),
      };

    default:
      return state;
  }
};

// react-journal
