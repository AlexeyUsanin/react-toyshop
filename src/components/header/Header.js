import React from 'react';
import { Navigation } from '../navigation/Navigation';
import './header.scss';

export const Header = () => (
  <header className="header">
    <h4>Header</h4>
    <Navigation />
  </header>
);