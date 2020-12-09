import React, { useState } from 'react';
import axios from 'axios'

const GetUser = () => {
const [email, setEmail] = useState('')
const [userdata, setUserdata] = useState('')

//const [isloaded, setLoaded] = useState(false)

const api = async (data) => {
  //const data = {usr: user, pwd: password}
  try {
    const res = await axios.get(`http://localhost:4000/api/user/${email}`, data);
    console.log(res.data.Item)
    setUserdata(res.data.Item)

  } catch (err) {
    console.log('there was an error' + err)
  }
}

const onUserChange = e => { setEmail(e.target.value) }

const onSubmit = e => {
  e.preventDefault();
  const data = {
    email:  email
  }
  api(data);
}


return (
  <div>
    <h1>get employee</h1>
    <form  onSubmit={onSubmit} encType="multipart/form-data">
      <input type="text" onChange={onUserChange} value={email} placeholder="email@example.com" /> 
      <button className="myButton" type="submit" onClick={onSubmit} value="Upload">Submit</button>
    </form>
    {
      Object.keys(userdata).map((key) => {
        return <h5 key={key}>{`${key}: ${userdata[key]}`}<hr/></h5>
      })
    }

  </div>
);
}

export default GetUser;