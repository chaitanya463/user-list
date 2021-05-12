import {useState} from 'react';

const FormItem = (props) => {
  const [userInput, setUserInput] = useState('');

  return (
    <div>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        id={props.label}
        type={props.type}
        ref={props.reference}/>
    </div>
  );
};
export default FormItem;
