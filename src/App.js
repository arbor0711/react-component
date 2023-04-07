import RegesterForm from "./components/RegesterForm";
function App() {
  const handleClick = () => {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt("Enter a number");
    alert(`computer number was ${randomNum} and your gusse ${userInput}`);
  };
  return (
    <div>
      <RegesterForm />
    </div>
  );
}

export default App;
