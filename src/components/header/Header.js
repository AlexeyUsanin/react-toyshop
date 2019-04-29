import React from 'react';
import { Navigation } from '../navigation/Navigation';
import './header.scss';

export const Header = () => (
  <header className="header">
    <h1>Header</h1>
    <Navigation />
    <h2>Navigation</h2>
  </header>
);
