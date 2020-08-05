import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { firebase } from '../firebase/firebaseConfig';
import JournalScreen from '../components/journal/JournalScreen';
import AuthRoutes from './AuthRoutes';
import { login } from '../redux/actions/authActions';
import Loading from '../components/loading/Loading';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import { startLoadingNotes } from '../redux/actions/noteActions';

const AppRoutes = () => {
  const dispatch = useDispatch();
  const [cheking, setCheking] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        dispatch(startLoadingNotes(user.uid));
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
      setCheking(false);
    });
  }, [dispatch, setCheking]);

  if (cheking) {
    return <Loading />;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoutes isAuth={isAuth} path="/auth" component={AuthRoutes} />
          <PrivateRoutes
            exact
            isAuth={isAuth}
            path="/"
            component={JournalScreen}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRoutes;
