import React, { useState, useContext } from 'react';
import { AuthContext } from '../store/Auth';
import axios from 'axios';

const SubmitUI = () => {
  const [auth]                            = useContext(AuthContext);
  const [firstname, setFirstname]         = useState('');
  const [lastname, setLastname]           = useState('');
  const [middleinitial, setMiddleinitial] = useState('');
  const [dob, setDOB]                     = useState('');
  const [doe, setDOE]                     = useState('');
  const [status, setStatus]               = useState('active');
  const [toggle, setToggle]               = useState(false);


  const api = async (data) => {
    try {
      await axios.post(`http://localhost:4000/api/employee/${lastname}`, data);
    } catch (err) {
      console.log('there was an error' + err);
    }
  }

  const onSubmit = e => {
    api({
      FirstName:        firstname,
      LastName:         lastname,
      MiddleInitial:    middleinitial,
      DateOfBirth:      dob,
      DateOfEmployment: doe,
      Status:           status
    });
  }


  const onToggle = e => {
    setToggle(!toggle)
    toggle ? setStatus('active') : setStatus('inactive')
  }


  return (
    <div>
      { auth ?
        <>
          <h2>Submit Employee</h2>
          <input type="text" onChange={ (e) => setFirstname    (e.target.value) } value={firstname}     placeholder="first name"    /> <br/>
          <input type="text" onChange={ (e) => setLastname     (e.target.value) } value={lastname}      placeholder="last name"     /> <br/>
          <input type="text" onChange={ (e) => setMiddleinitial(e.target.value) } value={middleinitial} placeholder="middle intial" /> <br/>
          <input type="text" onChange={ (e) => setDOB          (e.target.value) } value={dob}           placeholder="00/00/0000"    /> <br/>
          <input type="text" onChange={ (e) => setDOE          (e.target.value) } value={doe}           placeholder="00/00/0000"    /> <br/>
          <input type="text" onChange={ (e) => setStatus       (e.target.value) } value={status} /> <br/>
          <button className="myButton" type="submit" onClick={onSubmit} >Submit</button>
          <button className="myButton" onClick={onToggle} >{status}</button>
        </>
        : ''
      }
    </div>
  );
}

export default SubmitUI;