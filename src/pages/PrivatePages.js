import { Route, Switch, Redirect } from 'react-router-dom';
import { Main } from './main';
import { Categories } from './categories';


export const PrivatePages = [
  <Route 
    path="/"
    exact
    component={Categories}
    key='home'
  />,

  <Route 
    path="/home"
    component={Main}
    key='main'
  />,
  
  <Route
    path="/categories"
    component={Categories}
    key='categories'
  />,

  <Redirect
    from="/login"
    to="/"
    key="login"
  />

]