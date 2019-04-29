import ReactDom from 'react-dom';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';
import './app.scss';

const content = (
  <>
    <Header />
    <Main />
    <Footer />
  </>

);

ReactDom.render(content, document.getElementById('app'));
