import logo from "./logo.svg";
import "./App.css";

function App() {
  const [names, setNames] = useState(() => {
    return heavyWork();
  });

  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      return [input, ...prevState];
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((personName, idx) => {
        return <p key={idx}>{personName}</p>;
      })}
    </div>
  );
}

export default App;
