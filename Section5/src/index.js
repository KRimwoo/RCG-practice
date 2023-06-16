//this is responsible for rendering the React components and controlling behavior of the app
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

//create main entry, main hook, it tells where this react application should be placed in the web page that is loaded
//select "root" with regular js code and use method from React library
//store this object in a constant variable
const root = ReactDOM.createRoot(document.getElementById("root"));
//call render method to tell React what should be rendered in the selected div tag
root.render(<App />); //selected div "root" ==> App(component)
//"App" is now a component which is rendered in the place of that element with the id of "root" 
