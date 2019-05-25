import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { TaskList } from './task';
import { Main } from './main';
import { Login } from './login';
import { Categories } from './categories';


export const PagesComp = ({ onLogin, user }) => (
  user
    ? (
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
          path="/task"
          component={TaskList}
        />
        <Route
          render={({ location }) => (
            <h1>
              Woh, man! Page
              <b>{location.pathname}</b>
              not found
            </h1>
          )}
        />
      </Switch>
    )
    : (
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
          exact
          render={() => <Login onLogin={onLogin} />}
        />
        <Route
          render={({ location }) => (
            <h1>
              Woh, man! Page
              <b>{location.pathname}</b>
              not found
            </h1>
          )}
        />
      </Switch>
    )
);

const mapState = (state) => ({user: state.user});

export const Pages = connect(mapState)(PagesComp)