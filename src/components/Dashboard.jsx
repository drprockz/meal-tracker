import React, { useContext } from 'react';
import { MealContext } from '../context/MealContext';
import ExportButton from './ExportButton';

const Dashboard = () => {
  const { meals } = useContext(MealContext);

  // Example: Calculate total meals, etc.
  const totalMeals = Object.values(meals).reduce((acc, section) => acc + section.length, 0);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Total Meals Logged: {totalMeals}</p>
      {/* Add more analytics as needed */}
      <ExportButton data={meals} />
    </div>
  );
};

export default Dashboard;
