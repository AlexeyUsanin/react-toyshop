import './navigation.scss';

export const Nav = props => (
  <ul className="menu">
    {props.list
      .map(item => <li key={item}><a href={`/${item.toLowerCase()}`}>{item}</a></li>)}
  </ul>
);

export const Navigation = () => (
  <nav className="nav">
    <Nav
      list={['Home', 'Products', 'Contacts']}
    />
  </nav>
);
