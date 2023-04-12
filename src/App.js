import React, { useState } from "react";
import MealsList from "./components/MealsList";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <MealsList />
      <Counter />
    </div>
  );
}

export default App;
