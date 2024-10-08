import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MealProvider from './context/MealContext';

ReactDOM.render(
  <React.StrictMode>
    <MealProvider>
      <App />
    </MealProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
