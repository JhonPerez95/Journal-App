import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import RegisterScreen from '../components/auth/RegisterScreen';
import LoginScreen from '../components/auth/LoginScreen';

const AuthRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/auth/login" component={LoginScreen} />
        <Route exact path="/auth/register" component={RegisterScreen} />

        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
};

export default AuthRoutes;
