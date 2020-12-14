import React from 'react';
import axios from 'axios';

const DeleteBtn = ({id}) => {

  const api = async (data) => {
    try {
      const res = await axios.delete(`http://localhost:4000/api/employee/${id}`, 
        {headers: {'Authorization': `Basic ${localStorage.getItem('token')}`}
      })

    } catch (err) {
      console.log('there was an error' + err);
    }
  }


  const onSubmit = e => { api(); }


  return (
    <div>
        <>
          <button className="myButton" type="submit" onClick={onSubmit}>Delete</button>
        </>
    </div>
  );
}

export default DeleteBtn;