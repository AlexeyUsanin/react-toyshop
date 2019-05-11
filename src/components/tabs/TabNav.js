import './tabs.scss';

export const TabNav = ({ list, select }) => {
  const onClick = (e, index) => {
    select(index);
    e.preventDefault();
  };
 
  return (
    <nav className="nav-tab">
      <ul> {list.map((title, index) =>
          (<li key={index}>
            <a href="#"
                onClick={e => onClick(e, index)}>
              {title}
            </a>
          </li>)
        )}
      </ul>
    </nav> );
};