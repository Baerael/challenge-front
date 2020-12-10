import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../store/Auth';
import axios from 'axios';

const UserAuth = () => {
const [email, setEmail] = useState('');
const [userdata, setUserdata] = useState('');
const [auth, isAuth] = useContext(AuthContext);


const api = async () => {
  try {
    const res = await axios.get(`http://localhost:4000/api/user/${email}`);
    setUserdata(res.data.Item)
  } catch (err) {
    console.log('there was an error' + err)
  }
}

useEffect(() => {
  if (userdata.Status === 'active') {
    isAuth(true);
  } else {
    isAuth(false);
  }
});


const onUserChange = e => { setEmail(e.target.value); }
const onLogin      = e => { api(); }


return (
  <div>
    <h2>Employee Login</h2>
    <input type="text" onChange={onUserChange} value={email} placeholder="email@example.com" /> 
    <button className="myButton" type="submit" onClick={onLogin} value="Upload">Login</button>
  </div>
  );
}


export default UserAuth;