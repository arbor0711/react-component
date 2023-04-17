import { useMealsListContext } from "./providers/MealsProvider";

const MealsList = () => {
  // const todaysMeals = [
  //   { name: "Beaked Beans", calories: 200, id: 123 },
  //   { name: "Grilled Veggies", calories: 100, id: 223 },
  //   { name: "Soup", calories: 80, id: 323 },
  // ];
  // const [meals, setMeals] = useState(todaysMeals);

  const { meals } = useMealsListContext();
  return (
    <div>
      <h1>Meals List Using Context API</h1>
      {meals.map((meal, index) => (
        <h2 key={index}>{meal}</h2>
      ))}
    </div>
  );
};
export default MealsList;
