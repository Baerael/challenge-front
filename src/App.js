import './App.css';
import React, { useState } from 'react';
import GetUser from './views/GetUser';
import GetAllUsers from './views/GetAllUsers';
import DeleteUser from './views/DeleteUser';
import UserSubmit from './views/UserSubmit';
import UpdateUser from './views/UpdateUser';
import UserAuth from './views/UserAuth';


const App = () => {
  const [token, setToken] = useState()

  return (
    <div className="navbar">
      <UserAuth token={setToken()}/>
      <UserSubmit />
      <UpdateUser />
      <GetUser />
      <GetAllUsers />
      <DeleteUser />
    </div>
  );
}

export default App;
