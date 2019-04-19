import React from 'react';
import ReactDom from 'react-dom';
import { Header } from './components/header/Header';
import { Aside } from './components/aside/Aside';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';



const content = (
  <>
    <Header />
    <Aside />
    <Main />
    <Footer />
  </>

);

ReactDom.render(content, document.getElementById('app'))