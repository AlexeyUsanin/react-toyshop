import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { Navigation } from '../navigation/Navigation';
import './header.scss';

export const HeaderComponent = ({user}) => (
  <header className="header">
    <Navigation />
    {
      user ? <Link to="/signout">Sign Out</Link> : 
      <Link to="/login">Login</Link> 
    }
  </header>
);

const mapToProps = state => ({
  user: state.user
})

export const Header = connect(mapToProps)(HeaderComponent);