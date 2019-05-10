import PropTypes from "prop-types";

export const users = [
  { name: 'John', lastName: 'Petrov', age: 45 },
  { name: 'Bill', lastName: 'Ivanov', age: 23 }
];

const User = params => (
  <li>
    {'Name - '}
    {params.name}
    <br />
    {'Last Name - '}
    {params.lastName}
    <br />
    {'Age - '}
    {params.age}
  </li>
);

export const UserList = props => (
  <ul>
    {
    props.list.map((item, i) => (
      <User
        key={i}
        name={item[props.name]}
        lastName={item[props.lastName]}
        age={item[props.age]}
      />
    ))
 }
  </ul>
);

UserList.propTypes = {
  list: PropTypes.array,
  onClick: PropTypes.func
}
