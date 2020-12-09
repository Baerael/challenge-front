import React, { useState } from 'react';
import axios from 'axios'


const GetAllusers = () => {
const [userdata, setUserdata] = useState({DAT: []})


const api = async () => {
  try {
    const res = await axios.get(`http://localhost:4000/api/user/users`);
    setUserdata({DAT: res.data.Items})
  } catch (err) {
    console.log('there was an error' + err)
  }
}


const onSubmit = e => {
  api();
}


return (
  <div>
    <h1>Get All Users</h1>
    <button className="myButton" type="submit" onClick={onSubmit} value="Upload">Get</button>
    {
      userdata.DAT.map(key => {
        return <h5 key={key}>{`${key.Email} | ${key.FirstName} | ${key.Status}`} <hr/></h5> 
      })
    }

  </div>
);
}

export default GetAllusers;