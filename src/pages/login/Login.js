export const Login = ({ onLogin }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      passwowrd: e.target.password.value
    };
    setTimeout(() => {
      onLogin(data);
    }, 2000);
  };

  return (
    <form action="#" onSubmit={onSubmit}>
      <input required type="text" name="email" defaultValue="user@mail.com" />
      <br />
      <input required type="password" name="password" defaultValue="password" />
      <br />
      <input type="submit" value="login" />
      <br />
    </form>
  );
};
