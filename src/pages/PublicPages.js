import { Route } from 'react-router-dom';
import { Welcome } from './welcomePage';

export const PublicPages = [
  <Route
    path="/"
    exact
    component={Welcome}
    key="home"
  />

];
