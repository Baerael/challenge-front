import React, { useState } from 'react';
import axios from 'axios'

const UserAuth = ({setT}) => {
const [email, setEmail] = useState('')
const [userdata, setUserdata] = useState('')
const [token, setToken] = useState(Boolean(localStorage.getItem('token')))
const [tk, setTk] = useState()

const api = async () => {
  try {
    const res = await axios.get(`http://localhost:4000/api/user/${email}`);
    localStorage.setItem('token', res.data.Item.Status)
    setUserdata(res.data.Item)
  } catch (err) {
    console.log('there was an error' + err)
  }
}

const onUserChange = e => { setEmail(e.target.value) }
const onGodMod = e => { localStorage.setItem('token', 'active')}
const onLogin  = e => { 
  console.log(localStorage.getItem('token'))
  api(); 
}
const onLogOut = e => {
  console.log(localStorage.getItem('token'))
  setTk('logout')
  localStorage.setItem('token', 'inactive')
}

return (
  <div>
    <h1>Get Employee</h1>
    <input type="text" onChange={onUserChange} value={email} placeholder="email@example.com" /> 
    <button className="myButton" type="submit" onClick={onGodMod} value="Upload">GOD TOKEN</button>
    <button className="myButton" type="submit" onClick={onLogin} value="Upload">Login</button>
    <button className="myButton" type="submit" onClick={onLogOut} value="Upload">Logout</button>
    {
      Object.keys(userdata).map((key) => {
        return <h5 key={key}>{`${key}: ${userdata[key]}`}<hr/></h5>
      })
    }
  </div>
);
}

export default UserAuth;
/*

*/