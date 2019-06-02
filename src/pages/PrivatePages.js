import { Route, Redirect } from 'react-router-dom';
import { Products, Product } from './product';


export const PrivatePages = [

  <Route
    path="/Products/:id"
    component={Product}
    key="product"
  />,

  <Route
    path="/products"
    component={Products}
    key="products"
  />,

  <Redirect
    from="/login"
    to="/"
    key="login"
  />

];
