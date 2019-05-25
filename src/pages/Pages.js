import { Route, Switch, Redirect } from 'react-router-dom';
import { PrivatePages } from './PrivatePages';
import { PublicPages } from './PublicPages';
import { NotFound } from './notFound';
import { Login } from './login';

export const Pages = ({user, onLogin}) => (
    <Switch>

      {user ? PrivatePages : PublicPages}

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
