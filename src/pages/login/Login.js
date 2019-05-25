import { useState, useEffect } from 'react';
import { Loader } from "../../components/loader";
import './login.scss';

export const Login = ({onLogin}) => {
  const [loading, setLoader] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    };
    
    setLoader(true);

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
        setLoader(true);
        onLogin(user);
      });
  };

  return (
    <div className="form-wrapper">
      <form action="#" onSubmit={onSubmit}>
        <input required type="text" name="email" defaultValue="admin@a.com"/><br/>
        <input required type="password" name="password" defaultValue="admin"/><br/>
        <input type="submit" className="submit" value="login"/><br/>
        {loading && <Loader />}
      </form>
    </div>
  );
};


export const Login = connect()(LoginComp);