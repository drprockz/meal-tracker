import React, { createContext, useState } from 'react';

export const MealContext = createContext();

const MealProvider = ({ children }) => {
  const [meals, setMeals] = useState({
    Breakfast: [],
    Lunch: [],
    Snacks: [],
    Dinner: [],
    Others: [],
  });

  const addMeal = (section, meal) => {
    setMeals((prevMeals) => ({
      ...prevMeals,
      [section]: [...prevMeals[section], meal],
    }));
  };

  const deleteMeal = (section, id) => {
    setMeals((prevMeals) => ({
      ...prevMeals,
      [section]: prevMeals[section].filter((meal) => meal.id !== id),
    }));
  };

  return (
    <MealContext.Provider value={{ meals, addMeal, deleteMeal }}>
      {children}
    </MealContext.Provider>
  );
};

export default MealProvider;
