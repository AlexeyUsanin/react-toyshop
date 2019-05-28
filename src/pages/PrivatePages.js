import { Route, Switch, Redirect } from 'react-router-dom';
import { Main } from './main';
import { Categories } from './categories';
import { Products, Product } from '../components/product';


export const PrivatePages = [
  <Route 
    path="/"
    exact
    component={Categories}
    key='home'
  />,

  <Route 
    path="/home"
    component={Categories}
    key='main'
  />,

  <Route 
    path="/Products/:id"
    component={Product}
    key='products'
  />,
  
  <Route
    path="/product"
    component={Products}
    key='products'
  />,

  <Redirect
    from="/login"
    to="/"
    key="login"
  />

]