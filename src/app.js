import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Main } from './pages/main/Main';
import { Footer } from './components/footer/Footer';
import { Pages } from './pages';
import { checkUserService } from './services/userService';

import './app.scss';


class App extends Component {
  state = {
    user: null
  }

  // componentDidMount() {
  //   this.chekUser();
  // }

  componentDidUpdate(prevStates) {
    const {user} = this.state;

    if (prevStates.user && !user) {
      this.props.history().push('/');
    }
  }

  onLogin = (user) => {
    this.setState({user});
  }

  chekUser() {
    checkUserService()
      .then(user => this.onLogin(user))
      .catch(err => console.log(err));
  }

  render() {
    const { user } = this.state;

    return (
      <>
        <Header user={user}/>
          <Pages onLogin={this.onLogin} user={user}/>
        <Footer />
      </>
    );
  }
}

const Root = (
  <Router>
    <App />
  </Router>
);

ReactDom.render(Root, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
