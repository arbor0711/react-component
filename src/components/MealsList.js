import { useState } from "react";

const MealsList = () => {
  const todaysMeals = [
    { name: "Beaked Beans", calories: 200, id: 123 },
    { name: "Grilled Veggies", calories: 100, id: 223 },
    { name: "Soup", calories: 80, id: 323 },
  ];

  
  const [meals, setMeals] = useState(todaysMeals);
};
