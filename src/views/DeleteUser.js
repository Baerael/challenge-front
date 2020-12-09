import React, { useState } from 'react';
import axios from 'axios'

const DeleteUser = () => {
const [email, setEmail] = useState('')
//const [isloaded, setLoaded] = useState(false)

const api = async (data) => {
  try {
    const res = await axios.delete(`http://localhost:4000/api/user/${email}`, data);
  } catch (err) {
    console.log('there was an error' + err)
  }
}

const onUserChange = e => { setEmail(e.target.value) }

const onSubmit = e => {
  e.preventDefault();
  const data = {
    email: email
  }
  api(data);
}


return (
  <div>
    <h1>delete employee</h1>
    <form  onSubmit={onSubmit} encType="multipart/form-data">
      <input type="text" onChange={onUserChange} value={email} placeholder="email@example.com" /> 
      <button className="myButton" type="submit" onClick={onSubmit} value="Upload">Delete</button>
    </form>
  </div>
);
}

export default DeleteUser;