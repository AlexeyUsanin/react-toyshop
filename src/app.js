import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './appComponent';
import { store } from './store';

import './app.scss';


const Root = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDom.render(Root, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
