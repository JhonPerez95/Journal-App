import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import JournalScreen from '../components/journal/JournalScreen';
import AuthRoutes from './AuthRoutes';

const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRoutes} />
          <Route exact path="/" component={JournalScreen} />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRoutes;
