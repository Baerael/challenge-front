import React, { useState } from 'react';
import Btn from './DeleteBtn'
import axios from 'axios';


const GetAllUI = () => {
  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);


  const api = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/employee/employees`);
      setData(res.data.Items);
      setIsLoaded(true)

    } catch (err) {
      setIsLoaded(false)
      console.log('there was an error' + err);
    }
  }
   
  const onSubmit = e => { api(); }
  const onClick = e => {
    console.log('click')
    console.log(e.target.value)
  }

  
  return (
    <div>
      <>
        <h2>Get All Employee</h2>
        <button className="myButton" type="submit" onClick={onSubmit}>Get</button>
        <table>
          <thead>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>LastName</th>
            <th>Status</th>
          </tr>
          </thead>
          { isLoaded ?
            data.map(obj => {
              return (
                <tbody key={obj.ID}>
                  <tr>
                    <th>
                      {obj.ID} 
                      <button onClick={onClick}>delete</button>
                    </th>
                    <th>{obj.FirstName}</th>
                    <th>{obj.LastName}</th>
                    <th>{obj.Status}</th>
                  </tr>
                </tbody>
              )
            })
            : <></>
          }
        </table>
      </>
    </div>
  );
}


export default GetAllUI;
/*

      res.data.Items.map(obj => {
        console.log(obj)
        Object.values(obj).map(key => {
          console.log(key)
        })
      }


  return (
    <div>
      <>
        <h2>Get All Employee</h2>
        <button className="myButton" type="submit" onClick={onSubmit}>Get</button>
        <table>
          <thead>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>LastName</th>
            <th>Status</th>
          </tr>
          </thead>
          {
            userdata.DAT.map(key => {
              return (
                <tbody key={key.ID }>
                  <tr>
                    <th>{key.ID}<Btn id={key.ID} obj={key} state={setUserdata} /></th>
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
    </div>
  );
}

*/