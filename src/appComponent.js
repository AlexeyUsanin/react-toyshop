import React from 'react';
import { connect } from 'react-redux';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Pages } from './pages';
import { checkUserService } from './services/userService';
import { setUser } from './store/user';


export class AppComp extends Component {
  state = {
    user: null
  }

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
      .then(user => {
        this.props.dispatch(setUser(user));
      })
      .catch(err => console.log(err));
  }

  
  render() {
    const { user } = this.props;

    return (
      <>
        <Header />
          <Pages user={user}/>
        <Footer />
      </>
    );
  }

}

export const App = connect()(AppComp);