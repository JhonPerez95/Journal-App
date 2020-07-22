import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import JournalScreen from '../components/journal/JournalScreen';
import AuthRoutes from './AuthRoutes';

const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRoutes} />
          <Route exact path="/" component={JournalScreen} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRoutes;
