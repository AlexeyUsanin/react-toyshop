import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { TaskList } from './task';
import { Main } from './main';
import { Login } from './login';
import { Categories } from './categories';
import { NotFound } from './notFound';
import { Welcome } from './welcomePage';

export const Pages = ({onLogin, user}) => {
  return (
    user ? 
    <Switch>
      <Route 
        path="/"
        exact
        component={Categories}
      />
      <Route 
        path="/home"
        component={Main}
      />
      <Route
        path="/task"
        component={TaskList}
      />
      <Route
        path="/categories"
        exact
        component={Categories}
      />
      <Redirect
        from="/login"
        to="/"
      />
      <Route
        path="/404"
        component={NotFound}
      />
      <Redirect
        from="*"
        to="/404"
      />
    </Switch> : 
      <Switch>
      <Route 
        path="/"
        exact
        component={Welcome}
      />
      <Route 
        path="/home"
        exact
        component={Main}
      />
      <Route
        path="/task"
        component={TaskList}
      />
      <Route 
        path="/login"
        render={(props) => <Login onLogin={onLogin} {...props}/>}
      />
      <Route
        path="/404"
        component={NotFound}
      />
      <Redirect
        from="*"
        to="/404"
      />
    </Switch> 
  );
};
