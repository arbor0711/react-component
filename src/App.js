import MealsProvider from "./components/providers/MealsProvider";
import MealsList from "./components/MealsList";
import Counter from "./components/Counter";

function App() {
  return (
    <MealsProvider>
      <MealsList />
      <Counter />
    </MealsProvider>
  );
}

export default App;
