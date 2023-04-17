import { useMealsListContext } from "./providers/MealsProvider";
const counter = () => {
  const { meals } = useMealsListContext();
  return (
    <div>
      <h3>Number of meals today: {meals.length}</h3>
    </div>
  );
};

export default counter;
