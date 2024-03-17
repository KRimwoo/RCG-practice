import { useState } from "react";

function useInput(initialValue, submitAction) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //submit버튼 눌렀을 때 동작
  const handleSubmit = () => {
    setInputValue("");//input초기화
    submitAction(inputValue);//alert
  }

  return [inputValue, handleChange, handleSubmit];
}

export default useInput;