import React from 'react';
import { exportToExcel } from '../utils/exportToExcel';

const ExportButton = ({ data }) => {
  const handleExport = () => {
    exportToExcel(data, 'MealTrackerData');
  };

  return <button onClick={handleExport}>Export to Excel</button>;
};

export default ExportButton;
