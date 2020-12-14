import React from 'react';

const Con = (user) => {

  const api = async (data) => {
    try {
     // const res = await axios.delete(`http://localhost:4000/api/employee/${id}`, 
      //  {headers: {'Authorization': `Basic ${localStorage.getItem('token')}`}
     // })

    } catch (err) {
      console.log('there was an error' + err);
    }
  }
  
  const onClick = e => {
    console.log('clicked')
  }

  return (
    <tr>
      <th>
        {} 
        <button onClick={onClick}>delete</button>
      </th>
      <th>{}</th>
      <th>{}</th>
      <th>{}</th>
    </tr>
  )
}

export default Con;