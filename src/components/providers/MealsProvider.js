import React from "react";
const MealsContext = React.createContext();
const todayMeals = ["Baked Beans", "Baked Sweet Potatoes", "Baked Potatoes"];
const MealsProvider = ({ children }) => {
  const [meals, setMeals] = React.useState(todayMeals);
  return (
    <MealsContext.provider value={{ meals }}>{children}</MealsContext.provider>
  );
};
export const useMealsListContext = () => React.useContext;
export default MealsProvider;
