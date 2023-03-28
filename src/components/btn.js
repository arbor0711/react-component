function Btn() {
  const clickHandler = () => console.log("I touched");
  return <button onMouseOver={clickHandler}>Click Me</button>;
}

export default Btn;
