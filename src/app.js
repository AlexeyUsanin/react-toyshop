import ReactDom from 'react-dom';
import { Header } from './components/header/Header';
import { Main } from './pages/main/Main';
import { Footer } from './components/footer/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Pages } from './pages';

import './app.scss';


class App extends Component {
  state = {
    user: null
  }

  onLogin = (user) => {
    this.setState({user})
  }

  render() {
    const {user} =this.state;
    
    return (
      <>
        <Header />
          <Pages onLogin={this.onLogin} user={user}/>
        <Footer />
      </>
    )
  }
};

const Root = (
  <Router>
    <App />
  </Router>
)

ReactDom.render(Root, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
