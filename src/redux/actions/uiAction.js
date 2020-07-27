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

export const actStartLoading = () => {
  return {
    type: types.uiStartLoading,
  };
};

export const actFinishLoading = () => {
  return {
    type: types.uiFinishLoading,
  };
};
