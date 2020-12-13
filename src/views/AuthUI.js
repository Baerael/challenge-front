import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../store/Auth';
import axios from 'axios';

const AuthUI = () => {
  const [token, setToken] = useState('');
  const [auth, isAuth] = useContext(AuthContext);

  const [data, setData] = useState('')

  useEffect(() => {
    console.log('call')
    const syncUsers = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/employee/employees`);
        const d = res.data.Items

        d.map(key => {
          console.log(key)
        })


        setData(res.data.Item)
        //setUserdata(res.Items);
      } catch (err) {
        console.log('there was an error' + err);
      }
    }
    syncUsers()
  
  },[])

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
  const onClick = e => {
    console.log(data)
  }


  return (
    <div>
      <h2>Login Employee</h2>
      <button className="myButton" type="submit" onClick={onAuth}   >auth</button>
      <button className="myButton" type="submit" onClick={onDeauth} >deauth</button>
      <button className="myButton" type="submit" onClick={onClick} >check</button>
      <h4>{token}</h4>
      {
      }
    </div>
  );
}


export default AuthUI;