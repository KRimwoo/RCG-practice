import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault(); //prevent HTTP request

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    //initializing input value using ref. (manipulating the DOM directly)
    nameInputRef.current.value = '';//it works though, not IDEAL. 
    
    console.log(enteredName);
    setEnteredName("");//initializing input value using state
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}//load when updated
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
