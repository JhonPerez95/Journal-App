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
          item.id === payload.id ? payload.note : item
        ),
      };

    case types.notesAddNew:
      return {
        ...state,
        notes: [payload, ...state.notes],
      };

    case types.notesDelete:
      return {
        ...state,
        active: null,
        notes: state.notes.filter((item) => item.id !== payload),
      };

    case types.notesLogoutCleaning:
      return initialState;

    default:
      return state;
  }
};
