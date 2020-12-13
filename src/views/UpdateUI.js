import React, { useState, useContext } from 'react';
import { AuthContext } from '../store/Auth';
import axios from 'axios';


const UpdateUI = () => {
  const [id, setID] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [middleinitial, setMiddleinitial] = useState('');
  const [dob, setDOB] = useState('');
  const [doe, setDOE] = useState('');
  const [status, setStatus] = useState('active');
  const [toggle, setToggle] = useState(false);
  const [auth, isAuth] = useContext(AuthContext);


  const updateAPI = async (data) => {
    try {
      const res = await axios.put(`http://localhost:4000/api/employee/${id}`, data);
    } catch (err) {
      console.log('there was an error' + err);
    }
  }


  const api = async (data) => {
    try {
      const res = await axios.get(`http://localhost:4000/api/employees/${id}`, data);
      setFirstname    (res.data.Item.FirstName);
      setLastname     (res.data.Item.LastName);
      setMiddleinitial(res.data.Item.MiddleInitial);
      setDOB          (res.data.Item.DateOfBirth);
      setDOE          (res.data.Item.DateOfEmployment);
    } catch (err) {
      console.log('there was an error' + err);
    }
  }


  const onIDChange        = e => { setID        (e.target.value); }
  const onFirstNameChange    = e => { setFirstname    (e.target.value); }
  const onLastNameChange     = e => { setLastname     (e.target.value); }
  const onMiddleIntialChange = e => { setMiddleinitial(e.target.value); }
  const onDobChange          = e => { setDOB          (e.target.value); }
  const onDoeChange          = e => { setDOE          (e.target.value); }
  const onStatusChange       = e => { setStatus       (e.target.value); }


  const onSubmit = e => {
    e.preventDefault();
    const data = {
      id: id
    }

    api(data);
  }


  const onUpdate = e => {
    const data = {
      ID:               id,
      FirstName:        firstname,
      LastName:         lastname,
      MiddleInitial:    middleinitial,
      DateOfBirth:      dob,
      DateOfEmployment: doe,
      Status:           status
    }

    updateAPI(data);
  }


  const onToggle = e => {
    setToggle(!toggle)
    if (toggle) {
      setStatus('active');
    } else {
      setStatus('inactive');
    }
  }


  return (
    <div>
      { auth ? 
        <>
          <h2>Update employee</h2>
          <input type="text" onChange={onIDChange} value={id} placeholder="uuid" />
          <button className="myButton" type="submit" onClick={onSubmit} value="Upload">Get User</button> <br/>           
          <input type="text" onChange={onFirstNameChange}    value={firstname}     placeholder="first name"    /> <br/>
          <input type="text" onChange={onLastNameChange}     value={lastname}      placeholder="last name"     /> <br/>
          <input type="text" onChange={onMiddleIntialChange} value={middleinitial} placeholder="middle intial" /> <br/>
          <input type="text" onChange={onDobChange}          value={dob}           placeholder="00/00/0000"    /> <br/>
          <input type="text" onChange={onDoeChange}          value={doe}           placeholder="00/00/0000"    /> <br/>
          <input type="text" onChange={onStatusChange} value={status} /> <br/>
          <button className="myButton" type="submit" onClick={onUpdate} value="Upload">Update</button>
          <button className="myButton" onClick={onToggle}>{status}</button>
        </>
        : ''
      }
    </div>
  );
}

export default UpdateUI;