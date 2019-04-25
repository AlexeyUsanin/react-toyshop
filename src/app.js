import ReactDom from 'react-dom';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';
import { UserGreeting, GreetingTime } from './components/greeting/Greeting';
import './app.scss';

const content = (
  <>
    <Header />
    <UserGreeting
      text={GreetingTime()}
      name="Vasya"
    />
    <Main />
    <Footer />
  </>
);

ReactDom.render(content, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
