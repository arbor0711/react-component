import { useState } from "react";

export default function InputComponent() {
  const [inputText, setText] = useState("Hello");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={inputText} onChange={handleChange} />
      <p>You type: {inputText}</p>
      <button onClick={() => (setText = "Hello")}>Reset</button>
    </>
  );
}
