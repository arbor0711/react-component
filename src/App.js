import MealsProvider from "./components/providers/MealsProvider";
import MealsList from "./components/MealsList";
import Counter from "./components/Counter";
import { Btn1, Btn2, Btn3, Btn4 } from "./components/Btn";
function App() {
  return (
    <MealsProvider>
      <MealsList />
      <Counter />
      <Btn1 />
      <Btn2 />
      <Btn3 />
      <Btn4 />
    </MealsProvider>
  );
}

export default App;
