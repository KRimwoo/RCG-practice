import { useState } from 'react';

function TimeApp() {
  const [time, setTime] = useState(1);

  const handleClick = () => {
    let newTime; //블록 스코프 가지면서 변수 값을 여러 번 할당할 수 있다.
    if (time >= 12) {
      newTime = 13;
    }
    else {
      newTime = time + 1;
    }
    setTime(newTime);
  };

  return (
    <div>
      <span>
        현재 시각: {time}시
      </span>
      <button onClick={handleClick}>Update</button>
    </div>
  )
}

export default TimeApp;