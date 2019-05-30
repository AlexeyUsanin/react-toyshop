import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../navigation/Navigation';
import { server } from '../../services';
import './header.scss';

export const Header = ({user, onLogout}) => {

  const logoutHandler = (e) => {
    e.preventDefault();
    server.get('logout').then(() => onLogout(null));
  };
  
  return (
    <header className="header">
      
      <Navigation user={user}/>
      {
        user ? <Link to="/" onClick={logoutHandler}>Sign Out</Link> :
        <Link to="/login">Login</Link>
      }
    </header>
  )
};
