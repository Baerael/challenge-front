import './App.css';
import React, { useState, useContext } from 'react';
import GetUser     from './views/GetUser';
import GetAllUsers from './views/GetAllUsers';
import DeleteUser  from './views/DeleteUser';
import UserSubmit  from './views/UserSubmit';
import UpdateUser  from './views/UpdateUser';
import UserAuth    from './views/UserAuth';
import { Auth }    from './store/Auth';


const App = () => {

  return (
    <Auth>
    <div className="navbar">
      <UserAuth    />
      <UserSubmit  />
      <UpdateUser  />
      <GetUser     />
      <GetAllUsers />
      <DeleteUser  />
    </div>
    </Auth>
  );
}

export default App;
