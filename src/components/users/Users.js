import PropTypes from 'prop-types';

export const UserList = ({ list, onClick }) => {
  const users = list.map(({ id, name }) => (
    <li key={id} onClick={() => onClick(id)}>{name}</li>
  ));

  return <ul className="user-list">{users}</ul>;
};

UserList.propTypes = {
  list: PropTypes.array,
  onClick: PropTypes.func
};
