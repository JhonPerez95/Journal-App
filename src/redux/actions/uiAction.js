import { types } from '../types/types';

export const actSetError = (payload) => {
  return {
    type: types.uiSetError,
    payload,
  };
};

export const actRemoveError = () => {
  return {
    type: types.uiRemoveError,
  };
};
