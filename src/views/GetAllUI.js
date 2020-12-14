import React, { useState, useEffect } from 'react';
import Btn from './DeleteBtn'
import axios from 'axios';


const GetAllUI = () => {
  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [id, setID] = useState();


  useEffect(() => {
    const deleteRequest = async () => {
      try {
        const res = await axios.delete(`http://localhost:4000/api/employee/${id}`, 
          {headers: {'Authorization': `Basic ${localStorage.getItem('token')}`}
        })

        const newList = data.filter(key => {
          return key.ID !== id
        })
        setData(newList)

      } catch (err) {
        console.log('there was an error' + err);
      }
    }
    deleteRequest()

  }, [id])

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

  const deleteEmp = id => {
    setID(id)
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
            <th>Actions</th>
          </tr>
          </thead>
          { isLoaded ?
            data.map(obj => {
              return (
                <tbody key={obj.ID}>
                  <tr>
                    <th>{obj.ID}</th>
                    <th>{obj.FirstName}</th>
                    <th>{obj.LastName}</th>
                    <th>{obj.Status}</th>
                    <th>
                      <button 
                        onClick={() => setID(obj.ID)} 
                        className='myButton'
                      >
                        Delete
                      </button>
                    </th>
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