import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export const exportToExcel = (data, fileName) => {
  // Convert data to worksheet
  const ws = XLSX.utils.json_to_sheet(transformData(data));
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Meals');

  // Generate buffer
  const wbout = XLSX.write(wb, { type: 'array', bookType: 'xlsx' });

  // Save to file
  const blob = new Blob([wbout], { type: 'application/octet-stream' });
  saveAs(blob, `${fileName}.xlsx`);
};

const transformData = (data) => {
  const transformed = [];
  for (const [section, meals] of Object.entries(data)) {
    meals.forEach((meal) => {
      transformed.push({
        Section: section,
        Name: meal.name,
        Time: meal.time,
        Note: meal.note || '',
      });
    });
  }
  return transformed;
};
