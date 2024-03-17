import { useEffect } from "react";

const TimerApp = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("timer is working...");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("timer stops");
    };
  });

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요!</span>
    </div>
  );
};

export default TimerApp;
