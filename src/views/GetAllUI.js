import React, { useState, useEffect } from 'react';
import axios from 'axios';


const GetAllUI = () => {
  const [employees, setEmployees] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [id, setID] = useState(null);


  useEffect(() => {
    const deleteRequest = async () => {
      try {
        await axios.delete(`http://localhost:4000/api/employee/${id}`, 
          {headers: {'Authorization': `Basic ${localStorage.getItem('token')}`}
        })

        const newList = employees.filter(key => {
          return key.ID !== id
        })
        setEmployees(newList)

      } catch (err) {
        console.log('there was an error' + err);
      }
    }

    if (id != null) deleteRequest()
  }, [id])

  const api = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/employee/employees`);
      setEmployees(res.data.Items);
      setIsLoaded(true)

    } catch (err) {
      setIsLoaded(false)
      console.log('there was an error' + err);
    }
  }
   
  const onSubmit = e => { api(); }

  return (
    <div>
      <>
        <button className="myButton" type="submit" onClick={onSubmit}>Get all</button>
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
            employees.map(emp => {
              return (
                <tbody key={emp.ID}>
                  <tr>
                    <th>{emp.ID}</th>
                    <th>{emp.FirstName}</th>
                    <th>{emp.LastName}</th>
                    <th>{emp.Status}</th>
                    <th>
                      <button 
                        onClick={() => setID(emp.ID)} 
                        className='myButton'
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                </tbody>
              )
            })
            : <>empty</>
          }
        </table>
      </>
    </div>
  );
}


export default GetAllUI;