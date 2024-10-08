import React from 'react';
import MealItem from './MealItem';
import AddMealItem from './AddMealItem';

const MealSection = ({ sectionName, meals, onAdd, onDelete }) => (
  <div className="meal-section">
    <h2>{sectionName}</h2>
    {meals.map((meal) => (
      <MealItem key={meal.id} meal={meal} onDelete={() => onDelete(sectionName, meal.id)} />
    ))}
    <AddMealItem sectionName={sectionName} onAdd={onAdd} />
  </div>
);

export default MealSection;
