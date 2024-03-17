import useInput from "./UseInput";

function displayMessage(message) {
  alert(message);
}

function UseInputApp() {
  const [inputValue, handleChange, handleSubmit] = useInput("안녕", displayMessage);


  return (
    <div>
      <h1>UseInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  )
}

export default UseInputApp;