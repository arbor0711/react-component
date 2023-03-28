import ModeToggler from "./components/ModeToggler";

function App() {
  const handleClick = () => {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt("Enter a number");
    alert(`computer number was ${randomNum} and your gusse ${userInput}`);
  };
  return (
    <div>
      <h1>let's Play</h1>
      <button onClick={handleClick}>Guess the number between 1 and 3</button>
    </div>
  );
}

export default App;
