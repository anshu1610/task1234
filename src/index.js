import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Routes from "./UI-route/Routes/main"

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
