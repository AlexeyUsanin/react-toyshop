import { NavLink } from 'react-router-dom';

import './navigation.scss';

export const Nav = props => (
  <ul className="menu">
    {props.list
      .map(item => (
        <li key={item}>
          <NavLink
            exact
            activeClassName="active"
            to={`/${item.toLowerCase()}`}
          >
            {item}
          </NavLink>
        </li>
      ))}
  </ul>
);

export const Navigation = ({ user }) => (
  <nav className="nav">
    {user ? (
      <>
        <Nav
          list={['Home', 'Categories', 'Products', 'Contacts']}
        />
        {' '}
        <div>{user.email}</div>
      </>
    ) : <Nav list={['Home', 'Shop', 'Contacts']} />}
  </nav>
);
