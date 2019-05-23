import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './appComponent';
import { store } from './store';

import './app.scss';

class App extends Component {
  state = {
    user: null
  }
  
  onLogin = (user) => {
    this.setState({user});
  }

  render() {
    const {user} = this.state;
    
    return (
      <>
        <Header user={user}/>
          <Main>
            <Pages onLogin={this.onLogin} user={user}/>
          </Main>
        <Footer />
      </>
    )
  }
};

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
