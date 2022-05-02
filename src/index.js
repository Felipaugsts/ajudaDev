import React from "react";
import ReactDOM from "react-dom";
import "./Assets/css/Global.css";
import "./Assets/css/Queries.css";
import "./Model/FirebaseSetup";
import App from "./Views/App";

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
