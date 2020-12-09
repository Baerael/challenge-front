import './App.css';
import GetUser from './views/GetUser';
import GetAllUsers from './views/GetAllUsers';
import DeleteUser from './views/DeleteUser';
import UserSubmit from './views/UserSubmit';
import UpdateUser from './views/UpdateUser';

function App() {
  return (
    <div className="navbar">
      <UserSubmit />
      <GetUser />
      <UpdateUser />
      <GetAllUsers />
      <DeleteUser />
    </div>
  );
}

export default App;
