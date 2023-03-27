import Heading from "./components/Heading";
import Main from "./components/main";
import Sidebar from "./components/sidebar";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Heading />
      <Main name="Jef" position={4} />
      <Sidebar />
    </div>
  );
}

export default App;
