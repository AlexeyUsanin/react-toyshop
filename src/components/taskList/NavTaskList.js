export const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

export const NavTaskList = ({ select, activeIndex }) => {
  const onClick = (e, index) => {
    select(index);
    e.preventDefault();
  };

  return (
    <nav className="nav-tab">
      <ul>{days.map((day, index) => (
        <li key={index} className={activeIndex === index ? 'active' : ''}>
          <a
            href="#" 
            onClick={e => onClick(e, index)}>
            {day}
          </a>
        </li>
      ))}
      </ul>
    </nav>
  );
};