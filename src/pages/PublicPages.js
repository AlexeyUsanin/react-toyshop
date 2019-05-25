import { Route, Switch, Redirect } from 'react-router-dom';
import { Main } from './main';
import { Categories } from './categories';
import { Welcome } from './welcomePage';

export const PublicPages = [
  <Route 
    path="/"
    exact
    component={Welcome}
    key='home'
  />, 

  <Route 
    path="/home"
    exact
    component={Main}
    key='main'
  />
  
];