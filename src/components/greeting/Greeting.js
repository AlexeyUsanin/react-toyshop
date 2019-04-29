const date = new Date();
const time = Number(`${date.getHours()}.${date.getMinutes()}`);

export const UserGreeting = props => (
  <h2>
    {props.text}
    {props.name && `, ${props.name}`}
  !
  </h2>
);

export const GreetingTime = () => {
  if (time > 22 && time < 3) {
    return 'Good night';
  } if (time > 3 && time < 12) {
    return 'Good morning';
  } if (time > 12 && time < 18) {
    return 'Good afternoon';
  }
  return 'Good evening';
};
