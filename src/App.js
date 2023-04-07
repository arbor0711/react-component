import RegesterForm from "./components/RegesterForm";
import TextInputWithFocusButton from "./components/TextInputWithFocusButton";
function App() {
  const handleClick = () => {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt("Enter a number");
    alert(`computer number was ${randomNum} and your gusse ${userInput}`);
  };
  return (
    <div>
      <TextInputWithFocusButton />
    </div>
  );
}

export default App;
