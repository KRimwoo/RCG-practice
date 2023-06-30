import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);//set true at the beginning?
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log('Name Input is valid!');
    }
  }, [enteredNameIsValid]);

  //using state
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value.trim() !== '') {
      setEnteredNameIsValid(true);
    }
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault(); //prevent HTTP request

    setEnteredNameTouched(true);

    //valid check
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;//rest of the code will not be executed
    }
    setEnteredNameIsValid(true);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    //initializing input value using ref. (manipulating the DOM directly)
    //nameInputRef.current.value = '';//it works though, not IDEAL. 
    
    setEnteredName("");//initializing input value using state
  };

  //you can tell the nameInput is valid after touched
  const nameInputIsInvalid = enteredNameTouched && !enteredNameIsValid

  // const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid ' : 'form-control';


  
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}//load when updated
        />
        {nameInputIsInvalid && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
