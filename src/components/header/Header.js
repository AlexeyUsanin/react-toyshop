import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../navigation/Navigation';
import './header.scss';

export const Header = ({user}) => (
  <header className="header">
    <Navigation />
    {
      user ? <Link to="/signout">Sign Out</Link> : 
      <Link to="/login">Login</Link> 
    }
  </header>
);
