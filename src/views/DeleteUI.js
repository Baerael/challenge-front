import React, { useState, useContext } from 'react';
import { AuthContext } from '../store/Auth';
import axios from 'axios';

const DeleteUI = () => {
  const [id, setID] = useState('');
  const [auth, isAuth] = useContext(AuthContext);

  const api = async (data) => {
    try {
      const res = await axios.delete(`http://localhost:4000/api/employee/${id}`, 
        {headers: {'Authorization': `Basic ${localStorage.getItem('token')}`}
      })

    } catch (err) {
      console.log('there was an error' + err);
    }
  }


  const onIDChange = e => { setID(e.target.value); }
  const onSubmit   = e => { api(); }


  return (
    <div>
      <h2>Delete Employee</h2>
        <>
          <input type="text" onChange={onIDChange} value={id} placeholder="enter uuid" /> 
          <button className="myButton" type="submit" onClick={onSubmit} value="Upload">Delete</button>
        </>
    </div>
  );
}

export default DeleteUI;