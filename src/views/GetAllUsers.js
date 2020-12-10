import React, { useState, useContext } from 'react';
import { AuthContext } from '../store/Auth';
import axios from 'axios';


const GetAllusers = () => {
  const [auth] = useContext(AuthContext);
  const [userdata, setUserdata] = useState({DAT: []});


  const api = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/employee/employees`);
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
          <table>
            <thead>
            <tr>
              <th>Email ID</th>
              <th>Firstname</th>
              <th>LastName</th>
              <th>Status</th>
            </tr>
            </thead>
            {
              userdata.DAT.map(key => {
                return (
                  <tbody key={key.Email + 'unique'}>
                    <tr>
                      <th>{key.Email}</th>
                      <th>{key.FirstName}</th>
                      <th>{key.LastName}</th>
                      <th>{key.Status}</th>
                    </tr>
                  </tbody>
                )
              })
            }
          </table>
        </>
        : 'inactive employee'
      }
    </div>
  );
}


export default GetAllusers;