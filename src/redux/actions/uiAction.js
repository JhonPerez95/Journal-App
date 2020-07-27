import { types } from '../types/types';

import Swal from 'sweetalert2';

export const actSetError = (payload) => {
  return {
    type: types.uiSetError,
    payload,
  };
};

// Alert Error
export const actAlertError = (error) => {
  return (dispatch) => {
    dispatch(actSetError(error));
    Swal.fire('Error!', error, 'error');
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
