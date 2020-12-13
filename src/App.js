import './App.css';
import React, { useState, useContext } from 'react';
import GetUI     from './views/GetUI';
import GetAllUI from './views/GetAllUI';
import DeleteUI  from './views/DeleteUI';
import SubmitUI  from './views/SubmitUI';
import UpdateUI  from './views/UpdateUI';
import AuthUI  from './views/AuthUI';
import { Auth }    from './store/Auth';


const App = () => {
  return (
    <Auth>
      <div className="navbar">
        <AuthUI   />
        <SubmitUI />
        <UpdateUI />
        <GetUI    />
        <DeleteUI /> 
      </div>
      <div className='navbar'>
      <GetAllUI />
      </div>
    </Auth>
  );
}

export default App;
