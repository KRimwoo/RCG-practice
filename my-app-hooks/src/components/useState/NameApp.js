import { useState } from "react";

function NameApp() {
  const [names, setNames] = useState(['홍길동', '김민수']);
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      return [input, ...prevState];
    });
  };


  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange}/>
      <button onClick={handleUpload}>Upload</button>
      {names.map((personName, idx) => {
        return <p key={idx}>{personName}</p>;
      })}
    </div>
  )
};

export default NameApp;