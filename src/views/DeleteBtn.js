import React, { useState, useContext } from 'react';
import { AuthContext } from '../store/Auth';
import axios from 'axios';

const DeleteBtn = ({id}) => {
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


  const onSubmit   = e => { api(); }
  const onClick = () => { console.log(id)}


  return (
    <div>
        <>
          <button className="myButton" type="submit" onClick={onSubmit}>Delete</button>
        </>
    </div>
  );
}

export default DeleteBtn;