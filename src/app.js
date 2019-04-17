import React from 'react';
import ReactDom from 'react-dom';
import { Navigation } from './navigation/Navigation';


const Time = () => <time>{String(new Date().toLocaleDateString())}</time>;

const header = (
  <header>
    <h1>Hello <Time /></h1>
    <Navigation/> 
  </header>
);

ReactDom.render(header, document.getElementById('app'))