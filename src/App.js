import React, { useState } from "react";
import Heading from "./components/Heading";

function App() {
  const [word, setWord] = React.useState("Eat");

  function handleClick() {
    setWord("Drink");
  }
  return (
    <div className="App">
      <Heading message={word + " at Little Lemon"} />
      <button onClick={handleClick}>Click hear</button>
    </div>
  );
}

export default App;
