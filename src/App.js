import './App.css';
import React from 'react';
import GetUI     from './views/GetUI';
import GetAllUI from './views/GetAllUI';
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
      </div>
      <div className='navbar'>
      <GetAllUI />
      </div>
    </Auth>
  );
}

export default App;
