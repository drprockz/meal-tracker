import React, { useContext } from 'react';
import { MealContext } from '../context/MealContext';
import MealSection from '../components/MealSection';

const Home = () => {
  const { meals, addMeal, deleteMeal } = useContext(MealContext);

  const sections = ['Breakfast', 'Lunch', 'Snacks', 'Dinner', 'Others'];

  return (
    <div className="home">
      {sections.map((section) => (
        <MealSection
          key={section}
          sectionName={section}
          meals={meals[section]}
          onAdd={addMeal}
          onDelete={deleteMeal}
        />
      ))}
    </div>
  );
};

export default Home;
