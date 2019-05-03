
const User = ({ id, name, onClick }) => 
  
  (
  <li key={id} onClick={() => onClick(id)}>
    {name}
  </li>
);

export const UserList = ({list, onClick}) => (
  <div>
    <ul>
      {
      list.map(({id, name}) => (
        <User
          id={id}
          key={id}
          name={name}
          onClick={onClick}
        />
      ))
  }
    </ul>
  </div>
);

