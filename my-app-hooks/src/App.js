import logo from "./logo.svg";
import "./App.css";
import TimerApp from "./components/useEffect/TimerApp";

function App() {
  const [showTimer, setShowTimer] = useState(false);
  const timerHandler = () => {
    setShowTimer(!showTimer);
  };

  return (
    <div>
      {showTimer && <TimerApp />}∏
      <button onClick={timerHandler}>toggle</button>
    </div>
  );
}

function App() {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      <button onClick={() => setShowTimer(!showTimer)}>toggle</button>
      {showTimer && <TimerApp />}
    </div>
  );
}

export default App();
