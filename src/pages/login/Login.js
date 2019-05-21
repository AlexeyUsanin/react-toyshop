import { useState, useEffect } from 'react';
import { Loader } from "../../components/loader";

export const Login = ({onLogin}) => {
  const [loading, setLoader] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    };
    
    setLoader(true);
    // fetch('http://localhost:8086/public/login', {
    //   method: 'POST',
    //   credentials: 'include',
    //   headers:{
    //     'Content-type': 'application/json; charset=utf-8'
    //   },
    //   body: JSON.stringify(data)
    // })
    //   .then(resp => resp.json())
    //   .then(user => {
    //     onLogin(user);
    //     setLoader(true);
    //   });

    setTimeout(() => {
      onLogin(data);
      setLoader(true);
    }, 2000);
  };

  return (
    <form action="#" onSubmit={onSubmit}>
      <input required type="text" name="email" defaultValue="admin@a.com"/><br/>
      <input required type="password" name="password" defaultValue="admin"/><br/>
      <input type="submit" value="login"/><br/>
      <Loader loader={loading}/>
    </form>
  );
};


export const Login = connect()(LoginComp);