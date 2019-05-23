import { Link, NavLink } from 'react-router-dom';

import './navigation.scss';

export const Nav = props => (
  <ul className="menu">
    {props.list
      .map(item => <li key={item}><NavLink exact activeClassName="active" to={`/${item.toLowerCase()}`}>{item}</NavLink></li>)}
  </ul>
);

export const Navigation = ({ user }) => (
  <nav className="nav">
    <Nav
      list={['Home', 'Products', 'Contacts']}
    />
    {
      user ? <Link to="/signout">Sign Out</Link>
        : <Link to="/login">Login</Link>
    }
  </nav>
);
