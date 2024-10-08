import React from 'react';

const MealItem = ({ meal, onDelete }) => (
  <div className="meal-item">
    <div>
      <strong>{meal.name}</strong> at {meal.time}
      {meal.note && <em> - {meal.note}</em>}
    </div>
    <button onClick={onDelete}>Delete</button>
  </div>
);

export default MealItem;
