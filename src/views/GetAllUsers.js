import React, { useState, useContext } from 'react';
import { AuthContext } from '../store/Auth';
import axios from 'axios';


const GetAllusers = () => {
const [auth, isAuth] = useContext(AuthContext);
const [userdata, setUserdata] = useState({DAT: []});


const api = async () => {
  try {
    const res = await axios.get(`http://localhost:4000/api/user/users`);
    setUserdata({DAT: res.data.Items});
  } catch (err) {
    console.log('there was an error' + err);
  }
}


const onSubmit = e => { api(); }


return (
  <div>
    <h2>Get All Employee</h2>
    { auth ?
      <>
        <button className="myButton" type="submit" onClick={onSubmit}>Get</button>
        {
          userdata.DAT.map(key => {
            return <h5 key={key.Email + 'unique'}>{`${key.Email} | ${key.FirstName} | ${key.Status}`} <hr/></h5> 
          })
        }
      </>
      : 'inactive employee'
    }
  </div>
  );
}

export default GetAllusers;