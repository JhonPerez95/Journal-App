import { types } from '../types/types';

const initialState = {
  notes: [],
  active: null,
};

export const noteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types:
      break;

    default:
      return state;
  }
};
