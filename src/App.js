import PersonInput from './components/PersonInput/PersonInput';
import PersonsList from './components/PersonsList/PersonsList';
import './App.css';
import {useState} from 'react';

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserToList = (user) => {
    setUsersList((prevUserList) => {
      return [user, ...prevUserList];
    })
  };

  return (
    <div>
      <PersonInput onAddUser={addUserToList}/>
      <PersonsList users={usersList}/>
    </div>
  );
}

export default App;
