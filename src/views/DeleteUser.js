import React, { useState } from 'react';
import axios from 'axios'

const DeleteUser = () => {
const [email, setEmail] = useState('')
const [token, setToken] = useState('')

const api = async (data) => {
  try {
    const res = await axios.delete(`http://localhost:4000/api/user/${email}`);
  } catch (err) {
    console.log('there was an error' + err)
  }
}

const onUserChange = e => { setEmail(e.target.value) }

const onSubmit = e => {
  api();
}

const onAuth = () => { setToken ('1337secret86') }
const onDauth = () => { setToken('badkey') }


return (
  <div>
    <h1>Delete Employee</h1>
    { token == '1337secret86' ?
      <>
        <input type="text" onChange={onUserChange} value={email} placeholder="email@example.com" /> 
        <button className="myButton" type="submit" onClick={onSubmit} value="Upload">Delete</button>
      </>
      : ''
    }
    <button className="myButton" type="submit" onClick={onAuth} value="Upload">Auth</button>
    <button className="myButton" type="submit" onClick={onDauth} value="Upload">Dauth</button>
  </div>
  );
}

export default DeleteUser;