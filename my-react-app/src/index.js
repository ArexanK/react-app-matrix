import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Person from "./Components/PersonComponent.jsx";




const root = ReactDOM.createRoot(document.getElementById("root")); // where we want to render
root.render(<Person />); //<Person/> if its class component
