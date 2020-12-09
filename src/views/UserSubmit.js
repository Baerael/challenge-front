import React, { useState, } from 'react';
import axios from 'axios'

const UserSubmit = () => {
const [email, setEmail] = useState('')
const [firstname, setFirstname] = useState('')
const [lastname, setLastname] = useState('')
const [middleinitial, setMiddleinitial] = useState('')
const [dob, setDOB] = useState('')
const [doe, setDOE] = useState('')
const [status, setStatus] = useState('active')



const api = async (data) => {
  try {
    const res = await axios.post('http://localhost:4000/api/user/user', data);
    console.log(res)
    //setLoaded(true)
  } catch (err) {
    console.log('there was an error' + err)
  }
}


const onEmailChange        = e => { setEmail(e.target.value)         }
const onFirstNameChange    = e => { setFirstname(e.target.value)     }
const onLastNameChange     = e => { setLastname(e.target.value)      }
const onMiddleIntialChange = e => { setMiddleinitial(e.target.value) }
const onDobChange          = e => { setDOB(e.target.value)           }
const onDoeChange          = e => { setDOE(e.target.value)           }
// set status toggle for status


const onSubmit = e => {
  e.preventDefault();
  // need to check if all fields are filled before submit
  const data = {}
  data.email         = email;
  data.firstname     = firstname;
  data.lastname      = lastname;
  data.middleinitial = middleinitial;
  data.dob           = dob;
  data.doe           = doe;
  data.status        = status;
  api(data);
}


return (
  <div>
    <h1>submit employee</h1>
    <form  onSubmit={onSubmit} encType="multipart/form-data">
        <input type="text" onChange={onEmailChange}        value={email}         placeholder="email@example.com"  /> <br/>
        <input type="text" onChange={onFirstNameChange}    value={firstname}     placeholder="first name"         /> <br/>
        <input type="text" onChange={onLastNameChange}     value={lastname}      placeholder="last name"          /> <br/>
        <input type="text" onChange={onMiddleIntialChange} value={middleinitial} placeholder="middle intial"      /> <br/>
        <input type="text" onChange={onDobChange}          value={dob}           placeholder="date of birth"      /> <br/>
        <input type="text" onChange={onDoeChange}          value={doe}           placeholder="date of employment" /> <br/>
      <button className="myButton" type="submit" onClick={onSubmit} value="Upload">Submit</button>
    </form>
  </div>
  );
}

export default UserSubmit;