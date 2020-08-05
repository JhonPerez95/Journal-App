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
    default:
      return state;
  }
};