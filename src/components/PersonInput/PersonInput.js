import styles from './PersonInput.module.css';
import FormItem from './FormItem';
import Card from '../GUICommon/Card';
import Button from '../GUICommon/Button';

const PersonInput = (props) => {
  let name;
  let age;
  const addUserHandler = (event) => {
    event.preventDefault();

    if(name.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age < 1) {
      return;
    }
    console.log(name, age);
  };

  const onNameChangeHandler = (inputValue) => {

      name = inputValue;
  };

  const onAgeChangeHandler = (inputValue) => {
      age = inputValue;
  };

  return (
    <Card className={styles.input}>
    <form onSubmit={addUserHandler}>
      <div>
        <FormItem label="Name : " type="text" onChange={onNameChangeHandler}/>
        <FormItem label="Age : " type="number" onChange={onAgeChangeHandler}/>
      </div>
      <Button type="submit">Add User</Button>
    </form>
    </Card>
  );
}

export default PersonInput;
