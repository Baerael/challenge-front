import React, { useState, useContext } from 'react';
import { AuthContext } from '../store/Auth';
import axios from 'axios';

const UserSubmit = () => {
const [email, setEmail] = useState('');
const [firstname, setFirstname] = useState('');
const [lastname, setLastname] = useState('');
const [middleinitial, setMiddleinitial] = useState('');
const [dob, setDOB] = useState('');
const [doe, setDOE] = useState('');
const [status, setStatus] = useState('active');
const [toggle, setToggle] = useState(false);
const [auth, isAuth] = useContext(AuthContext);


const api = async (data) => {
  try {
    const res = await axios.post(`http://localhost:4000/api/user/${email}`, data);
  } catch (err) {
    console.log('there was an error' + err);
  }
}


const onEmailChange        = e => { setEmail        (e.target.value); }
const onFirstNameChange    = e => { setFirstname    (e.target.value); }
const onLastNameChange     = e => { setLastname     (e.target.value); }
const onMiddleIntialChange = e => { setMiddleinitial(e.target.value); }
const onDobChange          = e => { setDOB          (e.target.value); }
const onDoeChange          = e => { setDOE          (e.target.value); }


const onSubmit = e => {
  const data = {
    Email:            email,
    FirstName:        firstname,
    LastName:         lastname,
    MiddleInitial:    middleinitial,
    DateOfBirth:      dob,
    DateOfEmployment: doe,
    Status:           status
  }
    
  api(data);
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
    <h2>Submit Employee</h2>
    { auth ?
      <>
        <input type="text" onChange={onEmailChange}        value={email}         placeholder="email@example.com" /> <br/>
        <input type="text" onChange={onFirstNameChange}    value={firstname}     placeholder="first name"        /> <br/>
        <input type="text" onChange={onLastNameChange}     value={lastname}      placeholder="last name"         /> <br/>
        <input type="text" onChange={onMiddleIntialChange} value={middleinitial} placeholder="middle intial"     /> <br/>
        <input type="text" onChange={onDobChange}          value={dob}           placeholder="00/00/0000"        /> <br/>
        <input type="text" onChange={onDoeChange}          value={doe}           placeholder="00/00/0000"        /> <br/>
        <input type="text" value={status} /> <br/>
        <button className="myButton" type="submit" onClick={onSubmit} value="Upload">Submit</button>
        <button className="myButton" onClick={onToggle}>{status}</button>
      </>
      : 'inactive employee'
    }
  </div>
  );
}

export default UserSubmit;