import { types } from '../types/types';
import { firebase, auhtGoogleProvider } from '../../firebase/firebaseConfig';

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(auhtGoogleProvider)
      .then(({ user }) => dispatch(authActions(user.uid, user.displayName)));
  };
};

export const startEmailRegister = () => {
  return (dispatch) => {
    firebase;
  };
};

export const authActions = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};
