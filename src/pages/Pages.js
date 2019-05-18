import { Route, Switch, Redirect } from 'react-router-dom';

import { TaskList } from './task';
import { Main } from './main';
import { Login } from './login';
import { Categories } from './categories';


export const Pages = ({onLogin, user}) => {
  return (
    user ? 
    <Switch>
      <Route 
        path="/"
        exact
        component={Main}
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
        render={({location}) => <h1>Woh, man! Page <b>{location.pathname}</b>not found</h1>}
      />
    </Switch> : 
      <Switch>
      <Route 
        path="/"
        exact
        component={Main}
      />
      <Route 
        path="/home"
        exact
        component={Main}
      />
      <Route 
        path="/login"
        render={(props) => <Login onLogin={onLogin} {...props}/>}
      />
      <Route
        render={({location}) => <h1>Woh, man! Page <b>{location.pathname}</b>not found</h1>}
      />
    </Switch> 
  );
};