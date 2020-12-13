import React, { useState, useContext } from 'react';
import { AuthContext } from '../store/Auth';
import axios from 'axios';

const GetUI = () => {
  const [id, setID] = useState('');
  const [userdata, setUserdata] = useState('');
  const [auth, isAuth] = useContext(AuthContext);

  const api = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/employee/${id}`);
      setUserdata(res.data.Item);
    } catch (err) {
      console.log('there was an error' + err);
    }
  }

  const onChange = e => { setID(e.target.value); }
  const onSubmit = e => { api(); }


  return (
    <div>
      { auth ?
        <>
          <h2>Get Employee</h2>
          <input type="text" onChange={onChange} value={id} placeholder="UUID" /> 
          <button className="myButton" type="submit" onClick={onSubmit} value="Upload">Submit</button>
          {
            Object.keys(userdata).map((key) => {
              return <h5 key={key}>{`${key}: ${userdata[key]}`}<hr/></h5>
            })
          }
        </>
        : ''
      }
    </div>
  );
}

export default GetUI;