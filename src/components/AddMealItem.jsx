import React, { useState, useContext } from 'react';
import { MealContext } from '../context/MealContext';
import { format } from 'date-fns';

const AddMealItem = ({ sectionName }) => {
  const { addMeal } = useContext(MealContext);
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && time) {
      const newMeal = {
        id: Date.now(),
        name,
        time,
        note,
      };
      addMeal(sectionName, newMeal);
      setName('');
      setTime('');
      setNote('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-meal-form">
      <input
        type="text"
        placeholder="Meal Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Note (optional)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddMealItem;
