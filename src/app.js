import ReactDom from 'react-dom';
import { Navigation } from './navigation';


const Time = () => <time>{String(new Date().toLocaleDateString())}</time>;

const App = () => (
  <header>
    <h1>
Hello
      <Time />
    </h1>
    <Navigation />
  </header>
);

ReactDom.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
