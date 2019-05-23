import { loginUserService } from '../../services/userService';
export const Login = ({onLogin}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    };

    setTimeout(() => {
      onLogin(data);
    }, 2000);

    fetch('http://localhost:8086/public/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    })
      .then(resp => resp.json())
      .then(user => {
        onLogin(user);
      });
  };

  return (
    <form action="#" onSubmit={onSubmit}>
      <input required type="text" name="email" defaultValue="admin@a.com"/><br/>
      <input required type="password" name="password" defaultValue="admin"/><br/>
      <input type="submit" value="login"/><br/>
    </form>
  );
};
