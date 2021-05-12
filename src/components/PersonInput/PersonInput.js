import styles from './PersonInput.module.css';
import FormItem from './FormItem';
import Card from '../GUICommon/Card';
import Button from '../GUICommon/Button';
import ErrorDialog from '../GUICommon/ErrorDialog';
import {useState, useRef} from 'react';

const PersonInput = (props) => {

  const [error, setError] = useState('');
  const nameRef = useRef();
  const ageRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredAge = ageRef.current.value;
    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter valid name and age (non empty values).'
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter the age above 1'
      });
      return;
    }
    props.onAddUser({
      name : enteredName,
      age : enteredAge,
      key : Math.random() + enteredAge
    });

    nameRef.current.value = '';
    ageRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
    {error && <ErrorDialog title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={styles.input}>
    <form onSubmit={addUserHandler}>
      <div>
        <FormItem label="Name : " type="text" reference={nameRef}/>
        <FormItem label="Age : " type="number" reference={ageRef}/>
      </div>
      <Button type="submit">Add User</Button>
    </form>
    </Card>
    </div>
  );
}

export default PersonInput;
