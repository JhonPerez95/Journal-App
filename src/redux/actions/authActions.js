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

export const startEmailRegister = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(authActions(user.uid, user.displayName));
      })
      .catch((err) => console.error(err));
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
