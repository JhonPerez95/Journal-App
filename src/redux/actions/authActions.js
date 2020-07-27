import { types } from '../types/types';
import { firebase, auhtGoogleProvider } from '../../firebase/firebaseConfig';
import { actStartLoading, actFinishLoading } from './uiAction';

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
  };
};

// Login with Email
export const startEmailLogin = (email, password) => {
  return (dispatch) => {
    dispatch(actStartLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(actFinishLoading());
      })
      .catch((err) => {
        console.error(err);
        dispatch(actFinishLoading());
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
      .catch((err) => console.error(err));
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
      .catch((err) => console.error(err));
  };
};
