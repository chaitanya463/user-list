import styles from './PersonInput.module.css';
import FormItem from './FormItem';
import Card from '../GUICommon/Card';
import Button from '../GUICommon/Button';
import ErrorDialog from '../GUICommon/ErrorDialog';
import {useState} from 'react';

const PersonInput = (props) => {

  const [error, setError] = useState('');
  let name;
  let age;

  const addUserHandler = (event) => {
    event.preventDefault();
    if(name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter valid name and age (non empty values).'
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter the age above 1'
      });
      return;
    }
    props.onAddUser({
      name : name,
      age : age,
      key : Math.random() + age
    });
  };

  const errorHandler = () => {
    setError(null);
  }

  const onNameChangeHandler = (inputValue) => {
      name = inputValue;
      console.log(inputValue);
  };

  const onAgeChangeHandler = (inputValue) => {
      age = inputValue;
  };

  return (
    <div>
    {error && <ErrorDialog title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={styles.input}>
    <form onSubmit={addUserHandler}>
      <div>
        <FormItem label="Name : " type="text" onChange={onNameChangeHandler}/>
        <FormItem label="Age : " type="number" onChange={onAgeChangeHandler}/>
      </div>
      <Button type="submit">Add User</Button>
    </form>
    </Card>
    </div>
  );
}

export default PersonInput;
