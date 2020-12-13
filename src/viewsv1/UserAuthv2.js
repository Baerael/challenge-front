import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../store/Auth';
import axios from 'axios';

const UserAuthv2 = () => {
  const [token, setToken] = useState('');
  const [auth, isAuth] = useContext(AuthContext);

  const onAuth   = e => { 
    localStorage.setItem('token', 'asdf1234')
    setToken('asdf1234')
    isAuth(true)
  }
  const onDeauth = e => { 
    localStorage.clear() 
    setToken('invalid token')
    isAuth(false)
  }


  return (
    <div>
      <h2>Login Employee</h2>
      <button className="myButton" type="submit" onClick={onAuth}   >auth</button>
      <button className="myButton" type="submit" onClick={onDeauth} >deauth</button>
      <h4>{token}</h4>
    </div>
  );
}


export default UserAuthv2;