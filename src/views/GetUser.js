import React, { useState } from 'react';
import axios from 'axios'

const GetUser = () => {
const [email, setEmail] = useState('')
const [userdata, setUserdata] = useState('')

const api = async () => {
  try {
    const res = await axios.get(`http://localhost:4000/api/user/${email}`);
    setUserdata(res.data.Item)
  } catch (err) {
    console.log('there was an error' + err)
  }
}

const onUserChange = e => { setEmail(e.target.value) }

const onSubmit = e => {
  e.preventDefault();
  api();
}


return (
  <div>
    <h1>Get Employee</h1>
    <input type="text" onChange={onUserChange} value={email} placeholder="email@example.com" /> 
    <button className="myButton" type="submit" onClick={onSubmit} value="Upload">Submit</button>
    {
      Object.keys(userdata).map((key) => {
        return <h5 key={key}>{`${key}: ${userdata[key]}`}<hr/></h5>
      })
    }
  </div>
);
}

export default GetUser;