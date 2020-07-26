import { types } from '../types/types';

const initalState = {
  loading: false,
  msgError: null,
};

export const uiReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case types.uiSetError:
      return {
        ...state,
        msgError: payload,
      };

    case types.uiRemoveError:
      return {
        ...state,
        msgError: null,
      };
    default:
      return state;
  }
};
