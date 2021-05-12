import PersonInput from './components/PersonInput/PersonInput';
import PersonsList from './components/PersonsList/PersonsList';
import './App.css';
import {useState, Fragment} from 'react';

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserToList = (user) => {
    setUsersList((prevUserList) => {
      return [user, ...prevUserList];
    })
  };

  return (
    <Fragment>
      <PersonInput onAddUser={addUserToList}/>
      <PersonsList users={usersList}/>
    </Fragment>
  );
}

export default App;
