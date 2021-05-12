import {useState} from 'react';


const FormItem = (props) => {

  const [userInput, setUserInput] = useState('');

  const userInputChangeHandler = (event) => {
    setUserInput(event.target.value);
    props.onChange(event.target.value)
  };

  return (
    <div>
      <label htmlFor={props.label}>{props.label}</label>
      <input id={props.label} type={props.type} value={userInput} onChange={userInputChangeHandler}></input>
    </div>
  );
};

export default FormItem;
