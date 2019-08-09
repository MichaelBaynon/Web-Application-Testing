import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Display from "./components/Display";
import Controls from "./components/Dashboard";

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const scoreStrike = () => {
    setStrikes(strikes + 1);
  };
  const scoreBall = () => {
    setBalls(balls + 1);
  };
  const scoreFoul = () => {
    setStrikes(strikes + 1);
  };
  const scoreHit = () => {
    setStrikes(0);
    setBalls(0);
  };

  return (
    <div className="App">
      <h1>Baseball Game</h1>
      <Display strikes={2} balls={3} />
      <Controls />
    </div>
  );
}

export default App;
