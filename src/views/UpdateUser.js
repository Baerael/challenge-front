import React, { useState, } from 'react';
import axios from 'axios'


const UpdateUser = () => {
const [email, setEmail] = useState('')
const [firstname, setFirstname] = useState('')
const [lastname, setLastname] = useState('')
const [middleinitial, setMiddleinitial] = useState('')
const [dob, setDOB] = useState('')
const [doe, setDOE] = useState('')
const [status, setStatus] = useState('active')
const [toggle, setToggle] = useState(false)


const updateAPI = async (data) => {
  try {
    const res = await axios.put(`http://localhost:4000/api/user/${email}`, data);
    console.log(res)
  } catch (err) {
    console.log('there was an error' + err)
  }
}


const api = async (data) => {
  try {
    const res = await axios.get(`http://localhost:4000/api/user/${email}`, data);
    setFirstname    (res.data.Item.FirstName)
    setLastname     (res.data.Item.LastName)
    setMiddleinitial(res.data.Item.MiddleInitial)
    setDOB          (res.data.Item.DateOfBirth)
    setDOE          (res.data.Item.DateOfEmployment)
  } catch (err) {
    console.log('there was an error' + err)
  }
}


const onEmailChange        = e => { setEmail        (e.target.value) }
const onFirstNameChange    = e => { setFirstname    (e.target.value) }
const onLastNameChange     = e => { setLastname     (e.target.value) }
const onMiddleIntialChange = e => { setMiddleinitial(e.target.value) }
const onDobChange          = e => { setDOB          (e.target.value) }
const onDoeChange          = e => { setDOE          (e.target.value) }


const onSubmit = e => {
  e.preventDefault();
  const data = {}
  data.email = email
  api(data);
}


const onUpdate = e => {
  const data = {
    Email:             email,
    FirstName:         firstname,
    LastName:          lastname,
    MiddleInitial:     middleinitial,
    DateOfBirth:       dob,
    DateOfEmployment:  doe,
    Status:            status
  }
  updateAPI(data)
}


const onToggle = e => {
  setToggle(!toggle)
  if (toggle) {
    setStatus('active')
  } else {
    setStatus('inactive')
  }
}


return (
  <div>
    <h1>Update user</h1>
    <input type="text" onChange={onEmailChange} value={email} placeholder="email@example.com" />
    <button className="myButton" type="submit" onClick={onSubmit} value="Upload">Get User</button> <br/>           
    <input type="text" onChange={onFirstNameChange}    value={firstname}     placeholder="first name"    /> <br/>
    <input type="text" onChange={onLastNameChange}     value={lastname}      placeholder="last name"     /> <br/>
    <input type="text" onChange={onMiddleIntialChange} value={middleinitial} placeholder="middle intial" /> <br/>
    <input type="text" onChange={onDobChange}          value={dob}           placeholder="00/00/0000"    /> <br/>
    <input type="text" onChange={onDoeChange}          value={doe}           placeholder="00/00/0000"    /> <br/>
    <button className="myButton" type="submit" onClick={onUpdate} value="Upload">Update User</button> <br/>
    <button className="myButton" onClick={onToggle}>{status}</button>
  </div>
  );
}

export default UpdateUser;