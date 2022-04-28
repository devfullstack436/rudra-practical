import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./App.css";
import Home from "./components/home";

function App() {
  return (
    <div className="container">
      <header className="formheader">
        <Home />
      </header>
    </div>
  );
}

export default App;
