import { types } from '../types/types';
import { firebase, auhtGoogleProvider } from '../../firebase/firebaseConfig';
import { actStartLoading, actFinishLoading } from './uiAction';

import Swal from 'sweetalert2';
import { notesLoguot } from './noteActions';

// Login
export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

// Logout
export const logout = () => {
  return {
    type: types.logout,
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
    dispatch(notesLoguot());
  };
};

// Login with Email
export const startEmailLogin = (email, password) => {
  return (dispatch) => {
    dispatch(actStartLoading());
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(actFinishLoading());
      })
      .catch((err) => {
        dispatch(actFinishLoading());
        Swal.fire('Error', err.message, 'error');
      });
  };
};

// Login with Google
export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(auhtGoogleProvider)
      .then(({ user }) => dispatch(login(user.uid, user.displayName)))
      .catch((err) => Swal.fire('Error', err.message, 'error'));
  };
};

// Register with FireBase
export const startEmailRegister = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => Swal.fire('Error', err.message, 'error'));
  };
};
