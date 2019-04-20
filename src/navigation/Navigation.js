import './navigation.css';

const Error = ({ text = 'error', color = 'red' }) => <mark style={{ color }}>{text}</mark>;
const names = ['John', 'Ben'];

const Names = () => (
  <ul>
    {
      names
        .sort((prev, next) => (prev < next ? 1 : -1))
        .map(name => <li key={name}>{name}</li>)
    }
  </ul>
);

export const Navigation = () => (
  <nav className="nav">
    <ul>
      <li>
        <a href="/one">One</a>
      </li>
      <li>
        <a href="/two">Two</a>
      </li>
    </ul>
    <Error
      text="some text"
      color="red"
    />
    <Names />
  </nav>
);
